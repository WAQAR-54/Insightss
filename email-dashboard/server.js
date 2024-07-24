const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Sample list of 100 email recipients
const recipients = [
    'waqarazeem54@gmail.com', 'waqar12@insightss.co'
    
    // 'sheharyar.cs@gmail.com', 'alisherazchaudhary@gmail.com'
    // ... add more recipients here ...
    // 'recipient98@example.com', 'recipient99@example.com', 'recipient100@example.com'
];

// In-memory store to track email status and failed emails
let emailStatus = {};
let failedEmails = [];

// Function to send email
const sendEmail = async (emailOptions) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'waqarazeem54@gmail.com',
            pass: 'ewid bhka rqac axbk', // Your app password
        },
    });

    try {
        // Send email
        const info = await transporter.sendMail(emailOptions);
        return { success: true, info };
    } catch (error) {
        return { success: false, error };
    }
};

// Function to check if an email exists (dummy function)
const emailExists = (email) => {
    // Replace this with actual email verification service logic
    const blockedEmails = ['blocked@example.com'];
    return !blockedEmails.includes(email);
};

// POST route to handle form submission
app.post('/submit-form', async (req, res) => {
    try {
        const { name, email, message, scheduleTime } = req.body;

        // Check if email exists or is blocked
        if (!emailExists(email)) {
            failedEmails.push(email);
            res.status(400).json({ error: `Email '${email}' does not exist or is blocked.` });
            return;
        }

        const emailId = Date.now(); // Unique email ID based on current timestamp
        emailStatus[emailId] = { status: 'Scheduled', read: false };

        const mailOptions = {
            from: email,
            to: recipients.join(','),
            subject: `Contact Us form submission from ${name}`,
            html: `<p>${message}</p>`,
        };

        // Schedule email
        const job = schedule.scheduleJob(new Date(scheduleTime), async () => {
            try {
                const { success, info, error } = await sendEmail(mailOptions);
                if (success) {
                    emailStatus[emailId].status = 'Sent';
                    emailStatus[emailId].read = false; // Assuming email starts as unread
                } else {
                    emailStatus[emailId].status = 'Failed';
                    console.error('Error while sending email:', error);
                }
            } catch (error) {
                emailStatus[emailId].status = 'Failed';
                console.error('Error while sending email:', error);
            }
        });

        res.status(200).send({ emailId, status: 'Email scheduled for sending.' });
    } catch (error) {
        console.error('Error in /submit-form route:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to track email read status (tracking pixel)
app.get('/track/:emailId', (req, res) => {
    try {
        const emailId = req.params.emailId;
        if (emailStatus[emailId] && !emailStatus[emailId].read) {
            emailStatus[emailId].read = true;
            // Assuming you also update emailStats.read and emailStats.unread here
            emailStats.read++;
            emailStats.unread--;
        }
        // Return a 1x1 transparent pixel
        const img = Buffer.from(
            '47494638396101000100800000ffffff00ffffff21f90401000001002c00000000010001000002024401003b',
            'hex'
        );
        res.writeHead(200, {
            'Content-Type': 'image/gif',
            'Content-Length': img.length
        });
        res.end(img);
    } catch (error) {
        console.error('Error in /track/:emailId route:', error);
        res.status(500).send('Internal Server Error');
    }
});



// Endpoint to get email status
app.get('/email-status/:id', (req, res) => {
    try {
        const emailId = req.params.id;
        const status = emailStatus[emailId];

        if (status) {
            res.status(200).send({ emailId, ...status });
        } else {
            res.status(404).send('Email ID not found.');
        }
    } catch (error) {
        console.error('Error in /email-status/:id route:', error);
        res.status(500).send('Internal Server Error');
    }
});


// Endpoint to get failed email list
app.get('/failed-emails', (req, res) => {
    try {
        res.status(200).send(failedEmails);
    } catch (error) {
        console.error('Error in /failed-emails route:', error);
        res.status(500).send('Internal Server Error');
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
