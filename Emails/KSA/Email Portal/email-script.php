<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// If you're not using Composer, include the necessary PHPMailer files manually

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $senderEmail = $_POST['senderEmail'];
    $recipientEmail = $_POST['recipientEmail'];
    $subject = $_POST['subject'];
    $messageBody = $_POST['messageBody'];

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                        // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'waqarazeem54003@gmail.com';          // SMTP username
        $mail->Password   = 'Zawia@001@001';                  // SMTP password
        $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_STARTTLS` also accepted
        $mail->Port       = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom($senderEmail);
        $mail->addAddress($recipientEmail);                         // Add a recipient

        // Content
        $mail->isHTML(true);                                       // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $messageBody;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
