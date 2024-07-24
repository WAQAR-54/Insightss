const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS)
app.use(express.static('public'));

// Sample list of 100 email recipients
const recipients = [
    // 'waqarazeem54@gmail.com', 'waqar@insightss.co', 'sheharyar.cs@gmail.com', 'alisherazchaudhary@gmail.com'
    // ... add more recipients here ...
    'mianhamza24@gmail.com','waqarazeem54@gmail.com'
];

// In-memory store to track email status
let emailStatus = {};

// Function to send email
const sendEmail = (emailOptions) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'waqarazeem54@gmail.com',
            pass: 'ewid bhka rqac axbk', // Your app password
        },
    });

    return transporter.sendMail(emailOptions);
};

// POST route to handle form submission
app.post('/submit-form', async (req, res) => {
    try {
        const { name, email, message, scheduleTime } = req.body;

        const emailId = Date.now(); // Unique email ID based on current timestamp
        emailStatus[emailId] = 'Scheduled';

        const mailOptions = {
            from: email,
            to: recipients.join(','),
            subject: `Contact Us form submission from ${name}`,
            html: `${message}`,
        };

        // Schedule email
        const job = schedule.scheduleJob(new Date(scheduleTime), async () => {
            try {
                const info = await sendEmail(mailOptions);
                emailStatus[emailId] = 'Sent';
                console.log('Email sent: ' + info.response);
            } catch (error) {
                emailStatus[emailId] = 'Failed';
                console.error('Error while sending email:', error);
            }
        });

        res.status(200).send({ emailId, status: 'Email scheduled for sending.' });
    } catch (error) {
        console.error('Error in /submit-form route:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to get email status
app.get('/email-status/:id', (req, res) => {
    try {
        const emailId = req.params.id;
        const status = emailStatus[emailId];

        if (status) {
            res.status(200).send({ emailId, status });
        } else {
            res.status(404).send('Email ID not found.');
        }
    } catch (error) {
        console.error('Error in /email-status/:id route:', error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
