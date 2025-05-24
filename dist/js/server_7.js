const express = require('express');
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');
const path = require('path');

dotenv.config();

const app = express();

// Basic middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Completely disable helmet for testing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

// Serve static files without restrictions
app.use('/', express.static(path.join(__dirname), {
    setHeaders: (res, filePath) => {
        if (path.extname(filePath) === '.js') {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// MongoDB connection
const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017/cyberxyz_db');
let collection;

async function connectDb() {
    try {
        await client.connect();
        collection = client.db('cyberxyz_db').collection('contact_forms');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}
connectDb();

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendEmail(to, subject, text) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    };
    await transporter.sendMail(mailOptions);
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

// Handle contact form submissions
app.post('/api/contact', async (req, res) => {
    try {
        const formData = {
            interests: req.body.interests,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            os: req.body.os,
            company_size: req.body.company_size,
            privacy: req.body.privacy,
            message: req.body.message,
            timestamp: new Date()
        };

        if (!formData.email || !formData.firstname) {
            return res.status(400).json({ message: 'Required fields missing' });
        }

        await collection.insertOne(formData);

        const emailBody = `
            New submission from ${formData.firstname} ${formData.lastname}:
            - Email: ${formData.email}
            - Phone: ${formData.phone}
            - Interests: ${Array.isArray(formData.interests) ? formData.interests.join(', ') : formData.interests}
            - OS: ${formData.os}
            - Company Size: ${formData.company_size}
            - Message: ${formData.message}
        `;

        await sendEmail(
            process.env.EMAIL_USER,
            'New Contact Form Submission',
            emailBody
        );

        await sendEmail(
            formData.email,
            'Thank you for reaching out to CyberXYZ!',
            `Hello ${formData.firstname},\n\nThank you for contacting CyberXYZ! We'll reach out shortly.\n\nBest regards,\nCyberXYZ Team`
        );

        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error handling form submission:', error);
        res.status(500).json({ message: 'Internal server error' });
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
});

// Graceful shutdown
process.on('SIGTERM', async () => {
    if (client) {
        await client.close();
    }
    process.exit(0);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});