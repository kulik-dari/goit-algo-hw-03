const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');
const path = require('path');

// Load environment variables
dotenv.config();

// Check required environment variables
const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_KEY', 'EMAIL_USER', 'EMAIL_PASS'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
    console.error('Missing required environment variables:', missingEnvVars.join(', '));
    process.exit(1);
}

const app = express();

// Basic middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

// Serve static files
app.use('/', express.static(path.join(__dirname), {
    setHeaders: (res, filePath) => {
        if (path.extname(filePath) === '.js') {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
    }
});

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Test email configuration on startup
transporter.verify(function(error, success) {
    if (error) {
        console.error('Email configuration error:', error);
    } else {
        console.log('Email server is ready to take our messages');
    }
});

// Email sending function
async function sendEmail(to, subject, text) {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve HTML pages
app.get('/:page.html', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, `${page}.html`);
    
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Page not found');
    }
});

// Contact form handler
app.post('/api/contact', async (req, res) => {
    try {
        const formData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname || null,
            email: req.body.email,
            phone: req.body.phone || null,
            interests: Array.isArray(req.body.interests) ? req.body.interests : [],
            os: req.body.os || null,
            company_size: req.body.company_size || null,
            privacy: req.body.privacy || false,
            message: req.body.message || null,
            created_at: new Date().toISOString()
        };

        // Validate required fields
        if (!formData.email || !formData.firstname) {
            return res.status(400).json({ 
                success: false,
                message: 'Required fields missing' 
            });
        }

        // Save to Supabase
        const { data, error } = await supabase
            .from('contact_forms')
            .insert([formData])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ 
                success: false,
                message: 'Failed to save form data',
                error: error.message 
            });
        }

        // Send notification email
        const emailBody = `
            New submission from ${formData.firstname} ${formData.lastname || ''}:
            - Email: ${formData.email}
            - Phone: ${formData.phone || 'Not provided'}
            - Interests: ${formData.interests.join(', ') || 'None selected'}
            - OS: ${formData.os || 'Not specified'}
            - Company Size: ${formData.company_size || 'Not specified'}
            - Message: ${formData.message || 'No message'}
        `;

        await sendEmail(
            process.env.EMAIL_USER,
            'New Contact Form Submission',
            emailBody
        );

        // Send thank you email
        await sendEmail(
            formData.email,
            'Thank you for reaching out to CyberXYZ!',
            `Hello ${formData.firstname},\n\nThank you for contacting CyberXYZ! We'll reach out shortly.\n\nBest regards,\nCyberXYZ Team`
        );

        res.status(200).json({ 
            success: true,
            message: 'Form submitted successfully!',
            data
        });

    } catch (error) {
        console.error('Error handling form submission:', error);
        res.status(500).json({ 
            success: false,
            message: 'An error occurred while processing your submission',
            error: error.message 
        });
    }
});

// Direct link handler
app.get('/api/book-demo', (req, res) => {
    res.redirect('https://book.stripe.com/28o4iO3Rr7HacWk8ww');
});

// Simple ping route to test server
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Test Supabase connection
app.get('/test-connection', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('contact_forms')
            .select('count')
            .limit(1);
            
        if (error) throw error;
        
        res.json({ 
            message: 'Successfully connected to Supabase',
            data 
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Database connection error',
            error: error.message 
        });
    }
});

// Error handlers
app.use((req, res, next) => {
    res.status(404).send('Sorry, page not found!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Environment:', {
        supabase: process.env.SUPABASE_URL ? 'configured' : 'missing',
        email: process.env.EMAIL_USER ? 'configured' : 'missing'
    });
});

// Error handling
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});