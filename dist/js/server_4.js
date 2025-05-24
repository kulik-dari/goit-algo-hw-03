const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Настройки для отправки писем без OAuth2
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'daritest56', // Ваш адрес Gmail
        pass: 'Asdzaq55', // Пароль от вашего Gmail аккаунта
    },
});

async function sendMail(name, email, message) {
    try {
        const mailOptions = {
            from: 'daritest56@gmail.com',
            to: 'recipient@example.com', // Замените на нужный email получателя
            subject: 'Форма обратной связи',
            text: `Здравствуйте, ${name}!\n\nСпасибо за ваше сообщение.\n\nВаше сообщение:\n${message}`,
        };

        const result = await transporter.sendMail(mailOptions);
        return result;
    } catch (error) {
        return error;
    }
}

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const result = await sendMail(name, email, message);

        // Проверяем успешность отправки письма
        if (result && result.accepted && result.accepted.length > 0) {
            res.redirect('/success.html'); // Перенаправляем на страницу успешной отправки
        } else {
            throw new Error('Ошибка отправки письма.');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Ошибка отправки сообщения.' });
    }
});

app.listen(3001, () => {
    console.log('Сервер запущен на порту 3001');
});