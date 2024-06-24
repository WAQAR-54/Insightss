const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS)
app.use(express.static('public'));

// Sample list of 100 email recipients
const recipients = [
    'waqarazeem54@gmail.com', 'waqar@insightss.co' ,'sheharyar.cs@gmail.com' , 'alisherazchaudhary@gmail.com'
    // ... add more recipients here ...
    // 'recipient98@example.com', 'recipient99@example.com', 'recipient100@example.com'
];

// POST route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Configure the email transport using nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'waqarazeem54@gmail.com',
            pass: 'ewid bhka rqac axbk', // Your app password
        },
    });

    const mailOptions = {
        from: email,
        to: recipients.join(','),
        subject: `Contact Us form submission from ${name}`,
        html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Digital Transformation</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta  name="viewport" content="width=display-width, initial-scale=1.0, maximum-scale=1.0," />
		<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" type='text/css' />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" type='text/css' />
		
		<style type="text/css">		
			html { width: 100%; }
			body {margin:0; padding:0; width:100%; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;}
			img { display: block !important; border:0; -ms-interpolation-mode:bicubic;}

			.ReadMsgBody { width: 100%;}
			.ExternalClass {width: 100%;}
			.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
			.images {display:block !important; width:100% !important;}
			
			.heading {font-family: Roboto, Arial, Helvetica Neue, Helvetica, sans-serif !important;}
			.MsoNormal {font-family: 'Open Sans', Arial, Helvetica Neue, Helvetica, sans-serif !important;}	
			p {margin:0 !important; padding:0 !important;}						
			.display-button td, .display-button a  {font-family: 'Open Sans', Arial, Helvetica Neue, Helvetica, sans-serif !important;}
			.display-button a:hover {text-decoration:none !important;}
			
			/* MEDIA QUIRES */
			@media only screen and (min-width:799px)
			{
				.saf-table {
					display:table !important;
				}
				.main-width {
					width:600px;
				}
				.width800 {
					width:800px !important;
					max-width:800px !important;
				}
			}
			@media only screen and (max-width:799px)
            {
                body {width:auto !important;}
				.display-width {width:100% !important;}	
				.display-width-inner {width:600px !important;}	
				.padding { padding:0 20px !important; }	
				.res-padding-full { padding:0px !important; }
				.res-padding-left{padding-left: 0px !important;}
				.res-padding-right{padding-right: 0px !important;}
				.width800 {
					width:100% !important;
					max-width:100% !important;
				}
				.prod-fullwidth 
				{
					display: block !important;
					width:100% !important;
					max-width:100% !important;
				}
            }
			@media only screen and (max-width:768px)
            {	
				.width768{
					max-width:684px !important;
				}
				.child1-width{
					width:50% !important;
					max-width:50% !important;
				}
				.child2-width{
					width:50% !important;
					max-width:50% !important;
				}
				.full-width-height
				{ 	
					padding-top:28px !important;
					padding-bottom:28px !important;
				}
				.innovation-height
				{ 	
					padding-top:26px !important;
					padding-bottom:26px !important;
				}
			}
			@media only screen and (max-width:680px)
			{	
				.child1-width{
					width:50% !important;
					max-width:50% !important;
				}
				.child2-width{
					width:50% !important;
					max-width:50% !important;
				}
				.res-padding-left{
					padding-left: 40px !important;
				}
				.res-padding-right{
					padding-right: 40px !important;
				}
				.padding-hide
				{	
					padding-bottom:0px !important;
				}
				.res-attract-height {
					padding: 20px 10px 0 10px !important;
				}
				.full-width-height
				{ 	
					padding-top:35px !important;
					padding-bottom:30px !important;
				}
				.innovation-height
				{ 	
					padding-top:25px !important;
					padding-bottom:25px !important;
				}
			}
			@media only screen and (max-width:660px)
			{
				.child1-width{
					width:50% !important;
					max-width:50% !important;
				}
				.child2-width{
					width:50% !important;
					max-width:50% !important;
				}
				.res-padding-left{
					padding-left: 30px !important;
				}
				.res-padding-right{
					padding-right: 30px !important;
				}
				.res-attract-height {
					padding: 20px 10px 0 10px !important;
				}
				.full-width-height
				{ 	
					padding-top:36px !important;
					padding-bottom:20px !important;
				}
				.innovation-height
				{ 	
					padding-top:20px !important;
					padding-bottom:20px !important;
				}
			}
			@media only screen and (max-width:640px)
			{
				.res-attract-height {
					padding: 20px 10px 0 10px !important;
				}
				.child1-width, .child2-width{
					width:50% !important;
					max-width:50% !important;
				}
				.res-padding-left{
					padding-left: 20px !important;
				}
				.res-padding-right{
					padding-right: 20px !important;
				}
				.full-width-height
				{ 	
					padding-top:23px !important;
					padding-bottom:23px !important;
				}
				.innovation-height
				{ 	
					padding-top:13px !important;
					padding-bottom:13px !important;
				}
			}
			@media only screen and (max-width:639px)
			{
				body {width:auto !important;}
				.display-width {width:100% !important;}
				.display-width-inner,  
				.display-width-child {width:100% !important;}
				.display-width-child .button-width .display-button {width:auto !important;}
				.res-padding-full { padding:0 20px !important; }
				.padding-hide{ padding:0px !important; }
				.padding { padding:0 20px !important; }
				.saf-table {
					display:block !important;
				}
				.width282 {
				    width:282px !important;  
				}
				.div-width {				
				display: block !important;
				width: 100% !important;
				max-width: 100% !important;
				}
				.res-height20-bottom { padding-bottom:20px !important;}
				.res-height-top { padding-top:60px !important;}
				.full-width-height { padding-bottom:60px !important;}
				.innovation-height { padding-bottom:60px !important;}
				.footer-width {width:170px !important;}
				.height20 {height:20px !important; line-height:20px !important;}
				.height30 {height:30px !important;}
				.height60 {height:60px !important; line-height:60px !important;}
				.hide-height, .hide-bar {display:none !important;}
				.hide-border {border:0 !important;}
				.txt-center {text-align:center !important;}
				.res-center{
					margin:0 auto !important;
					display:table !important;
				}
				.txt-center {text-align:center !important;}
				span.unsub-width {width:100% !important;
				display:block !important; padding-bottom:10px !important; }
			}
			
			@media only screen and (max-width:480px) 
			{
				.display-width table, .display-width-child2 table {width:100% !important;}
				.display-width .button-width .display-button {width:auto !important;}
				.display-width-child .footer-width {width:170px !important;}
				.display-width .width282 {
				    width:282px !important;  
				}
				.div-width {				
					display: block !important;
					width: 100% !important;
					max-width: 100% !important;
				}
			}
			@media only screen and (max-width:420px)
			{
				.plan-cont-font {font-size:13px !important;}
				.plan-price-font {font-size:20px !important;}
			}
			@media only screen and (max-width:380px)
			{
				.display-width table {width:100% !important;}
				.display-width .button-width .display-button {width:auto !important;}
				.display-width-child .width282 { width:100% !important;}
				.plan-cont-font {font-size:12px !important;}
				.plan-price-font {font-size:16px !important;}
			}
			@media only screen and (min-width:300px) and (max-width:360px)
			{
				.plan-cont-font {font-size:9px !important;}
				.plan-price-font {font-size:14px !important;}
				.height43 {height:43px !important; line-height:43px !important;}
			}
		</style>
	</head>
	<body>
		<!--[if (gte mso 9)|(IE)]>
			<style >
				.Heading {font-family: Arial, Helvetica Neue, Helvetica, sans-serif !important;}
				.MsoNormal {font-family: Arial, Helvetica Neue, Helvetica, sans-serif !important;}
				.display-button td, .display-button a, a {font-family: Arial, Helvetica Neue, Helvetica, sans-serif !important;}			
			</style>
		<![endif]-->
				
		<!-- MENU STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if (gte mso 9)|(IE)]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG MENU -->
									<table align="center" bgcolor="#ffffff" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
										<tr>
											<td align="center" class="padding">
												<!--[if (gte mso 9)|(IE)]>
												<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
													<tr>
														<td align="center" valign="top" width="600">
															<![endif]-->
															<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																	<tr>
																		<td height="15" class="height30" style="mso-line-height-rule: exactly; line-height: 15px;"></td>
																	</tr>
																	<tr>
																		<td align="center" style="font-size:0;">
																			<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%; max-width:100%;">
																				<tr>
																					<td align="center" style="font-size:0; width:100%; max-width:100%;">
																						<!--[if (gte mso 9)|(IE)]>
																						<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																							<tr>
																								<td align="center" valign="top" width="150">
																									<![endif]-->
																									<div style="display:inline-block; max-width:150px; width:100%; vertical-align:top;" class="div-width">
																										<!--TABLE LEFT-->
																										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																											<tr>
																												<td align="center">
																													<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																														<tr>
																															<!-- ID:TXT MENU -->
																															<td align="center" style="color:#333333;" width="150">
																																<a href="https://insightss.co/" style="color:#333333; text-decoration:none;">
																																	<img src="https://insightss.co/wp-content/uploads/2023/06/Insights-saudi-arabia-1.png.webp" alt="Insights" width="auto" height="45" style="margin:0; border:0; padding:0; display:block;"/>
																																</a>
																															</td>
																														</tr>
																													</table>
																												</td>
																											</tr>
																										</table>
																									</div>
																			
																								<!--[if (gte mso 9)|(IE)]>
																								</td>
																								<td align="center" valign="top" width="446">
																								<![endif]-->
																									<div style="display:inline-block; width:100%; max-width:446px; vertical-align:top;"  class="div-width">
																										<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																											<tr>
																												<td align="center" style="font-size:0;">		
																													<!--[if (gte mso 9)|(IE)]>
																													<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																													<td width="210">
																													<![endif]-->
																														<div style="display:inline-block; width:100%; max-width:210px; vertical-align:top;" class="div-width">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:210px;">
																																<tr>
																																	<td width="100%" style="font-size:0;">&nbsp;</td>
																																</tr>
																															</table>
																														</div>
																													<!--[if (gte mso 9)|(IE)]>
																													</td>
																													<td width="230">
																													<![endif]-->
																													<div style="display:inline-block; width:100%; max-width:230px; vertical-align:top;" class="div-width">
																														<!--TABLE RIGHT-->
																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																															<tr>
																																<td align="center" style="font-size:0;">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																																		<tr>
																																			<td align="center">
																																				<table align="center" border="0" width="100%" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<td height="13" class="height10" style="mso-line-height-rule: exactly; line-height: 13px; font-size:0;">&nbsp;</td>
																																					</tr>
																																					<tr>	
																																						<!-- ID:TXT MENU -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:400; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							<a href="https://insightss.co/about-us/" style="color:#333333; text-decoration:none;">
																																								ABOUT
																																							</a>
																																						</td>
																																						<td width="10">&nbsp;</td>
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:300; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							|																					
																																						</td>
																																						<td width="10">&nbsp;</td>
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:400; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							<a href="https://insightss.co/clients/" style="color:#333333; text-decoration:none;">
																																								CLIENTS
																																							</a>
																																						</td>
																																						<td width="10">&nbsp;</td>
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:300; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							|																					
																																						</td>
																																						<td width="10">&nbsp;</td>
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:400; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							<a href="https://insightss.co/contact-us/" style="color:#333333; text-decoration:none;">
																																								CONTACT
																																							</a>
																																						</td>				
																																					</tr>
																																					<tr>
																																						<td height="13" class="hide-height" style="mso-line-height-rule: exactly; line-height: 13px; font-size:0;">&nbsp;</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>	
																													</div>
																													<!--[if (gte mso 9)|(IE)]>
																													</td>
																													</tr>
																													</table>
																													<![endif]-->
																												</td>
																											</tr>
																										</table>
																									</div>
																									<!--[if (gte mso 9)|(IE)]>
																								</td>
																							</tr>
																						</table>
																						<![endif]-->
																					</td>
																				</tr>
																			</table>
																		</td>			
																	</tr>
																	<tr>
																		<td height="15" class="height30" style="mso-line-height-rule: exactly; line-height: 15px; font-size:0;">&nbsp;</td>
																	</tr>
																</table>
															</div>
														<!--[if (gte mso 9)|(IE)]>
														</td>
													</tr>
												</table>
												<![endif]-->
											</td>
										</tr>
									</table>
								</div>
							<!--[if (gte mso 9)|(IE)]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>
		<!-- MENU ENDS -->
		
		<!-- HEADER STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if (gte mso 9)|(IE)]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG HEADER OPTIONAL -->
									<table align="center" border="0" bgcolor="#000000" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
										<tr>
											<td align="center">
												<!--[if gte mso 9]>
												<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:800px; height:482px; margin:auto;">
												<v:fill type="frame" src="https://www.pennyblacktemplates.com/demo/corp/images/800x640.jpg" color="#f6f8f7" />
												<v:textbox inset="0,0,0,0">
												<![endif]-->
												<div style="margin:auto;">
													<table align="center" border="0" background="https://insightss.co/wp-content/uploads/2024/03/real-estate.jpg" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="background-image:url(https://insightss.co/wp-content/uploads/2024/04/email-header.jpg); background-position:center; background-repeat:no-repeat;background-size: cover;">
														<tr>
															<td align="center" class="padding">
																<!--[if (gte mso 9)|(IE)]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
																	<tr>
																		<td align="center" valign="top" width="600">
																			<![endif]-->
																			<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td height="160" style="mso-line-height-rule: exactly; line-height: 160px; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td align="left" style="padding:0 10px;">
																							<!--[if (gte mso 9)|(IE)]>
																							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="left" width="510">
																								<tr>
																									<td align="left" valign="top" width="510" style="width:510px;">
																										<![endif]-->
																										<div style="display:inline-block; width:100%; max-width:510px; vertical-align:top;">
																											<table align="left" border="0" class="display-width-child" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																												<tr>
																													<td align="left">
																														<table align="left" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																															<tr>
																																<!-- ID:TXT HEADER SUBTITLE -->
																																<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400; letter-spacing:1px;">
																																	 Marketing Agency
																																</td>
																															</tr>
																															<!--BORDER BOTTOM FOR TEXT WIDTH-->
																															<tr>
																																<td align="left">
																																	<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width" width="40" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:40px !important;">
																																		<tr>
																																			<!-- ID:BR HEADER SUBTITLE BORDER -->
																																			<td align="center" height="2" style="border-bottom:2px solid #00bfff; line-height:2px; mso-line-height-rule: exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																	</table>
																																</td>	
																															</tr>
																															<!-- -->
																															<tr>
																																<!-- ID:TXT HEADER HEADING -->
																																<td align="left" class="heading" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:32px; line-height:42px; font-weight:700; letter-spacing:1px;">
																																	Digital Transformation 
																																</td>
																															</tr>
																															<tr>
																																<td height="5" style="mso-line-height-rule: exactly; line-height:5px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<!-- ID:TXT HEADER CONTENT -->
																																<td align="left" class="MsoNormal" style="color:#cccccc; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:400; letter-spacing:4px; line-height:24px;">
																																	EXPAND YOUR BUSINESS TO GLOBAL
																																</td>
																															</tr>
																															<tr>
																																<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<td align="left">
																																	<!-- ID:BTN HEADER BUTTON -->
																																	<table align="left" bgcolor="#00bfff" border="0" cellpadding="0" class="display-button" cellspacing="0" style="width:auto !important;">
																																		<tr>
																																			<td align="center" class="MsoNormal" style="color:#ffffff; font-family:Segoe UI, Helvetica Neue, Arial, Verdana, Trebuchet MS, sans-serif; font-weight:600; padding:8px 12px; font-size:12px; letter-spacing:1px;">
																																				<a href="#" style="color:#ffffff; text-decoration:none;">Schedule a Meeting</a>
																																			</td>
																																			<!-- <td align="center" width="16" style="color:#666666; height:16px;">
																																				<a href="#" style="color:#666666; text-decoration:none;">
																																					<img src="https://www.pennyblacktemplates.com/demo/corp/images/16x16x1.png" alt="16x16x1" width="16" style="margin:0; width:100%; border:0; padding:0; display:block;" />
																																				</a>
																																			</td> -->
																																			<td width="15">&nbsp;</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>	
																													</td>
																												</tr>
																											</table>
																										</div>
																										<!--[if (gte mso 9)|(IE)]>
																									</td>
																								</tr>
																							</table>
																							<![endif]-->
																						</td>
																					</tr>
																					<tr>
																						<td height="160" style="mso-line-height-rule: exactly; line-height: 160px; font-size:0;">&nbsp;</td>
																					</tr>
																				</table>
																			</div>
																			<!--[if (gte mso 9)|(IE)]>
																		</td>
																	</tr>
																</table>
																<![endif]-->
															</td>
														</tr>
													</table>
												</div>
												<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->	
											</td>
										</tr>
									</table>
								</div>
								<!--[if (gte mso 9)|(IE)]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>	
		<!-- HEADER ENDS -->
		
		<!-- WHAT WE ARE DOING TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- WHAT WE ARE DOING TOP SPACE ENDING -->
		
		<!-- WHAT WE ARE DOING TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="heading" style="color:#333333; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:26px; line-height:36px; letter-spacing:1px;">
																					OUR SERVICES
																				</td>
																			</tr>
																			<tr>
																				<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- WHAT WE ARE DOING TITLE ENDS -->
		
		<!-- WHAT WE ARE DOING STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if mso]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG SECTION-1 -->
									<table align="center" bgcolor="#ffffff" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
										<tr>
											<td align="center" class="padding">
												<!--[if mso]>
												<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
													<tr>
														<td align="center" valign="top" width="600">
															<![endif]-->
															<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																	<tr>
																		<td align="center">
																			<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																				<tr>
																					<td align="center" style="font-size:0;">
																						<!--[if mso]>
																						<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="585">
																							<tr>
																								<td align="center" valign="top" width="195">
																									<![endif]-->
																									<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																										<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;">
																											<!-- TABLE LEFT -->
																											<table align="left" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																												<tr>		
																													<td align="center" style="padding:15px 10px;">
																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%">
																															<tr>
																																<td align="center">
																																	<table align="center" class="width-center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																		<tr>	
																																			<td align="right">
																																				<table align="right" border="0" cellpadding="0" cellspacing="0" width="100%">
																																					<tr>
																																						<!-- ID:TXT HEADING -->
																																						<td align="right" class="heading txt-center" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:16px; font-weight:500; letter-spacing:1px;">
																																							<a href="#" style="color:#333333; text-decoration:none;">Social Media Marketing</a>
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="5" style="line-height:5px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT CONTENT -->
																																						<td align="right" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																							Elevate Your Brand with Effective Social Marketing.
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="30" class="height20" style="line-height:30px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>	
																																			<td align="right">
																																				<table align="right" border="0" cellpadding="0" cellspacing="0" width="100%">
																																					<tr>
																																						<!-- ID:TXT HEADING -->
																																						<td align="right" class="heading txt-center" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:16px; font-weight:500; letter-spacing:1px;">
																																							<a href="#" style="color:#333333; text-decoration:none;">Content Marketing</a>
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="5" style="line-height:5px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT CONTENT -->
																																						<td align="right" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																							Ignite Your Brand's Story with Powerful Content.
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="30" class="height20" style="line-height:30px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>	
																																			<td align="right">
																																				<table align="right" border="0" cellpadding="0" cellspacing="0" width="100%">
																																					<tr>
																																						<!-- ID:TXT HEADING -->
																																						<td align="right" class="heading txt-center" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:16px; font-weight:500; Letter-spacing:1px;">
																																							<a href="#" style="color:#333333; text-decoration:none;">Search Engine Optimization</a>
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="5" style="line-height:5px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT CONTENT -->
																																						<td align="right" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																							Elevating Your Online Presence with Expert SEO
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>
																											</table>
																										</div>
																									</div>
																									<!--[if mso]>
																								</td>
																								<td align="center" valign="top" width="195">
																									<![endif]-->
																									<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																										<!--TABLE LEFT-->
																										<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" class="display-width-child" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																											<tr>
																												<td align="left" style="padding:15px 10px;">
																													<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																														<tr>
																															<td align="center" style="color:#666666;" width="175">
																																<img src="https://insightss.co/wp-content/uploads/2024/04/Services-seconf.png" alt="175x290" width="175" height="290" style="margin:0; border:0; padding:0; width:100%; max-width:100%; display:block;" />
																															</td>
																														</tr>
																													</table>	
																												</td>
																											</tr>	
																										</table>
																									</div>
																									<!--[if mso]>
																								</td>
																								<td align="center" valign="top" width="195">
																									<![endif]-->
																									<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																										<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;">
																											<!-- TABLE RIGHT -->
																											<table align="right" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																												<tr>		
																													<td align="center" style="padding:15px 10px;">
																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%">
																															<tr>
																																<td align="center">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																		<tr>	
																																			<td align="left">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																					<tr>
																																						<!-- ID:TXT HEADING -->
																																						<td align="left" class="heading txt-center" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:16px; font-weight:500; letter-spacing:1px;">
																																							<a href="#" style="color:#333333; text-decoration:none;">PPC/Google ads</a>
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="5" style="line-height:5px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT CONTENT -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																							Maximize Your Reach with Precision PPC Strategies.
																																						</td>
																																					</tr>
																																				</table>	
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="30" class="height20" style="line-height:30px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>	
																																			<td align="left">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																					<tr>
																																						<!-- ID:TXT HEADING -->
																																						<td align="left" class="heading txt-center" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:16px; font-weight:500; letter-spacing:1px;">
																																							<a href="#" style="color:#333333; text-decoration:none;">Email Marketing Services</a>
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="5" style="line-height:5px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT CONTENT -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																							Empower Your Brand with Expert Email Marketing.
																																						</td>
																																					</tr>
																																				</table>	
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="30" class="height20" style="line-height:30px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>	
																																			<td align="left">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																					<tr>
																																						<!-- ID:TXT HEADING -->
																																						<td align="left" class="heading txt-center" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:16px; font-weight:500; letter-spacing:1px;">
																																							<a href="#" style="color:#333333; text-decoration:none;">Product/Service Activation</a>
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="5" style="line-height:5px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT CONTENT -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																							Empowering Your Product/Service with Seamless Activation.
																																						</td>
																																					</tr>
																																				</table>	
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>
																											</table>	
																										</div>
																									</div>
																									<!--[if mso]>
																								</td>
																							</tr>
																						</table>
																						<![endif]-->
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</div>
															<!--[if mso]>
														</td>
													</tr>
												</table>
												<![endif]-->
											</td>
										</tr>
									</table>
								</div>
								<!--[if mso]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>
		<!-- WHAT WE ARE DOING ENDS -->
		
		<!-- WHAT WE ARE DOING BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if mso]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG SECTION-1 -->
									<table align="center" bgcolor="#ffffff" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
										<tr>
											<td align="center" class="padding">
												<!--[if mso]>
												<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
													<tr>
														<td align="center" valign="top" width="600">
															<![endif]-->
															<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																	<tr>
																		<td height="45" style="mso-line-height-rule: exactly; line-height:45px; font-size:0;">&nbsp;</td>
																	</tr>
																</table>
															</div>
															<!--[if mso]>
														</td>
													</tr>
												</table>
												<![endif]-->
											</td>
										</tr>
									</table>
								</div>
								<!--[if mso]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>
		<!-- WHAT WE ARE DOING BOTTOM SPACE ENDING -->
		
		<!-- ABOUT US STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-3 -->
												<table align="center" bgcolor="#F6F6F6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tr>
														<td align="center">
															<table align="center"  border="0" cellpadding="0" cellspacing="0" width="100%">
																<tr>
																	<td align="left" class="res-padding-full">
																		<!--[if mso]>
																			<table border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width:800px;">
																				<tr>
																					<td width="700">
																						<![endif]-->
																						<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" class="display-width width768" style="max-width:700px;">
																							<tr>
																								<td>
																									<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%">
																										<tr>
																											<td align="left" style="font-size:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%">
																													<tr>
																														<td align="center" valign="top" width="400">
																															<![endif]-->
																															<div style="display:inline-block; width:100%; max-width:350px; vertical-align:top;" class="div-width child1-width">
																																<!--TABLE LEFT -->
																																<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																																	<tr>										
																																		<td align="left" class="res-center">
																																			<table align="left" border="0" cellpadding="0" width="100%" cellspacing="0">
																																				<tr>										
																																					<td align="left" class="res-height20-bottom">
																																						<table align="left" border="0" cellpadding="0" width="100%" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:auto !important;">
																																							<tr>
																																								<td align="left" width="400" style="color:#000000; font-size:0;">
																																									<img src="https://insightss.co/wp-content/uploads/2024/04/about-400.png" alt="Insights About Us" width="400" height="420" style="margin:0; border:0; padding:0; width:100%; max-width:100%; display:block; height:340px;"/>
																																								</td>
																																							</tr>
																																						</table>
																																					</td>			
																																				</tr>
																																			</table>
																																		</td>			
																																	</tr>
																																</table>			
																															</div>	
																															
																														<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="300">
																														<![endif]-->
																															<div style="display:inline-block; max-width:350px; width:100%; vertical-align:top;" class="div-width child2-width">
																																<!--TABLE RIGHT -->
																																<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="res-padding-right padding-hide">
																																			<div style="display:inline-block; max-width:500px; width:100%; vertical-align:top;" class="div-width">
																																				<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																					<tr>
																																						<td align="center" class="full-width-height padding-hide res-attract-height" style="padding:20px 20px;">
																																							<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																																								<tr>
																																									<td height="40" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT ABT HEADING -->
																																									<td align="left" class="heading txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:20px; line-height:30px; font-weight:500; letter-spacing:1px;">
																																										<a href="#" style="text-decoration:none; color:#000000;">ABOUT US</a>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT ABT CONTENT -->
																																									<td align="left" class="MsoNormal txt-center" style="color:#000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:400; line-height:24px;">
																																										We offer a comprehensive suite of solutions to help businesses thrive in today’s digital landscape. From increasing brand visibility and driving website traffic to engaging audiences and generating leads, our digital marketing services are designed to achieve your goals and maximize your online presence.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<!-- <tr>
																																									
																																									<td align="left" class="MsoNormal txt-center" style="color:#f6f6f6; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:400; line-height:24px;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui sit amet ligula cursus.
																																									</td>
																																								</tr> -->
																																								<tr>
																																									<td height="15" style="mso-line-height-rule: exactly; line-height:15px; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<!-- <tr>
																																									
																																									<td class="hide-border" style="border-left:3px solid #ffffff; padding-left:15px;">
																																										<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																											<tr>
																																											
																																												<td align="left" class="MsoNormal txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:600; line-height:24px; letter-spacing:1px;">
																																													We, The Corp in the process to improve your financial needs by providing quality services.
																																												</td>
																																											</tr>
																																											<tr>
																																												<td height="5" style="mso-line-height-rule: exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																											</tr>
																																											<tr>
																																												
																																												<td align="left" class="MsoNormal txt-center" style="color:#f6f6f6; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:600; line-height:24px; letter-spacing:1px;">
																																													JOHN PETER, CEO
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr> -->
																																							</table>				
																																						</td>
																																					</tr>	
																																				</table>
																																			</div>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>	
																									</table>
																								</td>
																							</tr>
																						</table>	
																						<!--[if mso]>
																					</td>
																					<td width="100">&nbsp;</td>
																				</tr>
																			</table>
																		<![endif]-->	
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- ABOUT US ENDS -->
		
		<!-- PRIMARY SERVICES TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- PRIMARY SERVICES TOP SPACE ENDING -->
		
		<!-- PRIMARY SERVICES TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="heading" style="color:#333333; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:26px; line-height:36px; letter-spacing:1px;">
																					Other Services
																				</td>
																			</tr>
																			<tr>
																				<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- PRIMARY SERVICES TITLE ENDS -->

		
		
		<!-- PRIMARY SERVICES-1 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="800">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
															<tr>
																<td align="center" valign="top" width="600">
																	<![endif]-->
																	<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="100%" style="max-width:600px;">
																			<tbody>
																				<tr>
																					<td align="center">
																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																							<tr>
																								<td align="center" style="font-size:0;">
																									<!--[if mso]>
																									<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																										<tr>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE LEFT -->
																													<table align="left" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																	<tr>
																																		<td align="center">
																																			<!-- ID:BG PRIMARY SERVICES -->
																																			<table align="center" border="0" bgcolor="#f6f6f6" class="width282" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center">
																																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																							<tr>
																																								<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																							</tr>
																																							<!-- <tr>
																																								<td align="center" width="64" valign="middle">
																																									<img src="https://www.pennyblacktemplates.com/demo/corp/images/64x64x1.png" alt="64x64x1" width="64" height="64" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																								</td>
																																							</tr>	 -->
																																							<tr>
																																								<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT PRIMARY SERVICES HEADING -->
																																								<td align="center" class="heading" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:16px; line-height:26px; letter-spacing:1px;">
																																									<a href="#" style="text-decoration:none; color:#333333;">Web Development</a>
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>	
																																								<!-- ID:TXT PRIMARY SERVICES CONTENT -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																									Crafting Digital Experiences That Inspire, Innovate, and Elevate Online Presence
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:BR PRIMARY SERVICES BOTTOM BORDER -->
																																					<td height="20" style="border-bottom:4px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE CENTER -->
																													<table align="left" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																	<tr>
																																		<td align="center">
																																			<!-- ID:BG PRIMARY SERVICES -->
																																			<table align="center" border="0" bgcolor="#f6f6f6" class="width282" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center">
																																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																							<tr>
																																								<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																							</tr>
																																							<!-- <tr>
																																								<td align="center" width="64" valign="middle">
																																									<img src="https://www.pennyblacktemplates.com/demo/corp/images/64x64x2.png" alt="64x64x2" width="64" height="64" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																								</td>
																																							</tr>	 -->
																																							<tr>
																																								<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT PRIMARY SERVICES HEADING -->
																																								<td align="center" class="heading" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:16px; line-height:26px; letter-spacing:1px;">
																																									<a href="#" style="text-decoration:none; color:#333333;">E-Commerece Solutions</a>
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>	
																																								<!-- ID:TXT PRIMARY SERVICES CONTENT -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																									Empowering Your Online Business with Tailored E-Commerce Solutions.
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:BR PRIMARY SERVICES BOTTOM BORDER -->
																																					<td height="20" style="border-bottom:4px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE RIGHT -->
																													<table align="right" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																	<tr>
																																		<td align="center">
																																			<!-- ID:BG PRIMARY SERVICES -->
																																			<table align="center" border="0" bgcolor="#f6f6f6" class="width282" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center">
																																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																							<tr>
																																								<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																							</tr>
																																							<!-- <tr>
																																								<td align="center" width="64" valign="middle">
																																									<img src="https://www.pennyblacktemplates.com/demo/corp/images/64x64x3.png" alt="64x64x3" width="64" height="64" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																								</td>
																																							</tr>	 -->
																																							<tr>
																																								<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT PRIMARY SERVICES HEADING -->
																																								<td align="center" class="heading" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:16px; line-height:26px; letter-spacing:1px;">
																																									<a href="#" style="text-decoration:none; color:#333333;">WordPress Development</a>
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>	
																																								<!-- ID:TXT PRIMARY SERVICES CONTENT -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																									WordPress Solutions: Empowering Your Online Presence with Excellence.		</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:BR PRIMARY SERVICES BOTTOM BORDER -->
																																					<td height="20" style="border-bottom:4px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																										</tr>
																									</table>
																									<![endif]-->
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																			</tbody>	
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- PRIMARY SERVICES-1 ENDS -->
		
		<!-- PRIMARY SERVICES-2 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="800">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
															<tr>
																<td align="center" valign="top" width="600">
																	<![endif]-->
																	<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="100%" style="max-width:600px;">
																			<tbody>
																				<tr>
																					<td align="center">
																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																							<tr>
																								<td align="center" style="font-size:0;">
																									<!--[if mso]>
																									<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																										<tr>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE LEFT -->
																													<table align="left" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																	<tr>
																																		<td align="center">
																																			<!-- ID:BG PRIMARY SERVICES -->
																																			<table align="center" border="0" bgcolor="#f6f6f6" class="width282" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center">
																																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																							<tr>
																																								<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																							</tr>
																																							<!-- <tr>
																																								<td align="center" width="64" valign="middle">
																																									<img src="https://www.pennyblacktemplates.com/demo/corp/images/64x64x1.png" alt="64x64x1" width="64" height="64" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																								</td>
																																							</tr>	 -->
																																							<tr>
																																								<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT PRIMARY SERVICES HEADING -->
																																								<td align="center" class="heading" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:16px; line-height:26px; letter-spacing:1px;">
																																									<a href="#" style="text-decoration:none; color:#333333;">Technical SEO</a>
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>	
																																								<!-- ID:TXT PRIMARY SERVICES CONTENT -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																									Unlocking Website Potential with Expert Technical SEO Strategies.
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:BR PRIMARY SERVICES BOTTOM BORDER -->
																																					<td height="20" style="border-bottom:4px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE CENTER -->
																													<table align="left" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																	<tr>
																																		<td align="center">
																																			<!-- ID:BG PRIMARY SERVICES -->
																																			<table align="center" border="0" bgcolor="#f6f6f6" class="width282" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center">
																																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																							<tr>
																																								<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																							</tr>
																																							<!-- <tr>
																																								<td align="center" width="64" valign="middle">
																																									<img src="https://www.pennyblacktemplates.com/demo/corp/images/64x64x2.png" alt="64x64x2" width="64" height="64" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																								</td>
																																							</tr>	 -->
																																							<tr>
																																								<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT PRIMARY SERVICES HEADING -->
																																								<td align="center" class="heading" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:16px; line-height:26px; letter-spacing:1px;">
																																									<a href="#" style="text-decoration:none; color:#333333;">PPC/Google ads</a>
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>	
																																								<!-- ID:TXT PRIMARY SERVICES CONTENT -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																									Maximize Your Online Visibility with Targeted PPC Advertising Solution.
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:BR PRIMARY SERVICES BOTTOM BORDER -->
																																					<td height="20" style="border-bottom:4px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE RIGHT -->
																													<table align="right" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																	<tr>
																																		<td align="center">
																																			<!-- ID:BG PRIMARY SERVICES -->
																																			<table align="center" border="0" bgcolor="#f6f6f6" class="width282" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center">
																																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																							<tr>
																																								<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																							</tr>
																																							<!-- <tr>
																																								<td align="center" width="64" valign="middle">
																																									<img src="https://www.pennyblacktemplates.com/demo/corp/images/64x64x3.png" alt="64x64x3" width="64" height="64" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																								</td>
																																							</tr>	 -->
																																							<tr>
																																								<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT PRIMARY SERVICES HEADING -->
																																								<td align="center" class="heading" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:16px; line-height:26px; letter-spacing:1px;">
																																									<a href="#" style="text-decoration:none; color:#333333;">Email Marketing </a>
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>	
																																								<!-- ID:TXT PRIMARY SERVICES CONTENT -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																									Your trusted partner in email marketing excellence. 
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:BR PRIMARY SERVICES BOTTOM BORDER -->
																																					<td height="20" style="border-bottom:4px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																										</tr>
																									</table>
																									<![endif]-->
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																			</tbody>	
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- PRIMARY SERVICES-2 ENDS -->
		
		<!-- PRIMARY SERVICES BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- PRIMARY SERVICES BOTTOM SPACE ENDING -->
		
	
		<!-- USER FRIENDLY TOP SPACE BEGINING -->
		
		<!-- USER FRIENDLY TOP SPACE ENDING -->
		
		<!-- USER FRIENDLY STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%" >
			<tbody >
				<tr>
					<td align="center" style="font-size:0; " >
            
						<!--[if mso]>
              
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>

								<td align="center" valign="top" width="800">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top; " class="width800">
										<!-- ID:BG SECTION-3 -->
										<table align="center" bgcolor="#00bfff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style=" max-width:800px; background-image: url(https://insightss.co/wp-content/uploads/2023/12/miscellaneous-back.jpg); background-position: center; background-repeat: no-repeat;background-size: cover;">
											<tr>
												<td align="center" class="">
													<!--[if mso]>
													<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
														<tr>
															<td align="center" valign="top" width="600">
																<![endif]-->
																<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																	<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="100%" style="max-width:600px;">
																		<tr>
																			<td align="center">
																				<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																					<tr>
                                            <tr>
                                              <td height="50" class="hide-height" style="line-height:15px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
                                            </tr>
																						<td align="center" style="font-size:0;">
																							<!--[if mso]>
																							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																								<tr>
																									<td align="center" valign="top" width="272">
																										<![endif]-->
																										<div style="display:inline-block; max-width:272px; vertical-align:top; width:100%;" class="div-width">
																											<!--TABLE LEFT-->
																											<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%;">
																												<tr>
																													<td align="left" style="padding:10px;">
																														<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																															<tr>
																																<td align="left">
																																	<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																		<tr>
																																			<td height="15" class="hide-height" style="line-height:15px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT USER FRIENDLY 2COL HEADING -->
																																			<td align="left" class="heading txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:20px; line-height:30px; letter-spacing:1px;">
																																				<a href="#" style="color:#ffffff; text-decoration:none;">
																																					Our Values
																																				</a>
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="5" style="line-height:5px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT USER FRIENDLY CONTENT -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:400;">
																																				Our core values represent the principles we are committed to. They define what we stand for as a management consultant and the same is practiced in our day-to-day work and decisions. 
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																									<td align="center" valign="top" width="312">
																										<![endif]-->
																										<div style="display:inline-block; max-width:312px; vertical-align:top; width:100%;" class="div-width">
																											<!-- TABLE RIGHT -->	
																											<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%;">
																												<tr>
																													<td align="left" style="padding:10px;">
																														<!--[if mso]>
																														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																															<tr>
																																<td align="center" valign="top" width="280">
																																	<![endif]-->
																																	<div class="res-center" style="display:inline-block; max-width:280px; vertical-align:top; width:100%;">
																																		<!-- TABLE LEFT -->	
																																		<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																			<tr>
																																				<td align="center" style="padding:5px;"> 
																																					<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																						<tr>
																																							<td align="center" valign="top" width="80">	
																																								<img src="https://insightss.co/wp-content/uploads/2024/04/hands-helping-svgrepo-com.svg" alt="80x80x1" width="40" height="40" style="margin:0; border:0;" />
																																							</td>
																																						</tr>
																																						<tr>
																																							<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																						</tr>
																																						<tr>
																																							<!-- ID:TXT USER FRIENDLY HEADING -->
																																							<td align="center" class="heading" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:16px; font-weight:500; line-height:26px; letter-spacing:1px;">
																																								<a href="#" style="color:#ffffff; text-decoration:none;">Integrity
                                                                                  </a>
																																							</td>
																																						</tr>	
																																					</table>
																																				</td>
																																				<td align="center" style="padding:5px;"> 
																																					<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																						<tr>
																																							<td align="center" valign="top" width="80">	
																																								<img src="https://insightss.co/wp-content/uploads/2024/04/light-bulb-13-svgrepo-com-1.svg" alt="80x80x2" width="40" height="40" style="margin:0; border:0;" />
																																							</td>
																																						</tr>
																																						<tr>
																																							<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																						</tr>
																																						<tr>
																																							<!-- ID:TXT USER FRIENDLY HEADING -->
																																							<td align="center" class="heading" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:16px; font-weight:500; line-height:26px; letter-spacing:1px;">
																																								<a href="#" style="color:#ffffff; text-decoration:none;">
                                                                                  Competence</a>
																																							</td>
																																						</tr>
																																					</table>
																																				</td>
																																			</tr>
																																		</table>
																																	</div>
																																	<!--[if mso]>
																																</td>
																															</tr>
																														</table>
																														<![endif]-->
																													</td>
																												</tr>
																												<!-- 2ND ROW -->
																												<tr>
																													<td align="left" style="padding:10px;">
																														<!--[if mso]>
																														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																															<tr>
																																<td align="center" valign="top" width="280">
																																	<![endif]-->
																																	<div class="res-center" style="display:inline-block; max-width:280px; vertical-align:top; width:100%;">
																																		<!-- TABLE LEFT -->	
																																		<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																			<tr>
																																				<td align="center" style="padding:5px;"> 
																																					<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																						<tr>
																																							<td align="center" valign="top" width="80">	
																																								<img src="https://insightss.co/wp-content/uploads/2024/04/user-svgrepo-com.svg" alt="80x80x3" width="40" height="40" style="margin:0; border:0;" />
																																							</td>
																																						</tr>
																																						<tr>
																																							<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																						</tr>
																																						<tr>
																																							<!-- ID:TXT USER FRIENDLY HEADING -->
																																							<td align="center" class="heading" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:16px; font-weight:500; line-height:26px; letter-spacing:1px;">
																																								<a href="#" style="color:#ffffff; text-decoration:none;">
                                                                                  Professionalism</a>
																																							</td>
																																						</tr>	
																																					</table>
																																				</td>
																																				
																																			</tr>
																																		</table>
																																	</div>
																																	<!--[if mso]>
																																</td>
																															</tr>
																														</table>
																														<![endif]-->
																													</td>
																												</tr>
																												<!-- -->
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																								</tr>
																							</table>
																							<![endif]-->
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																	</table>
																</div>
																<!--[if mso]>
															</td>
														</tr>
													</table>
													<![endif]-->
												</td>
											</tr>
                      <tr>
                        <td height="50" class="hide-height" style="line-height:15px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
                      </tr>
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>
			</tbody>
		</table>
		<!-- USER FRIENDLY ENDS -->
			
		<!-- GALLERY TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="white" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- GALLERY TOP SPACE ENDING -->
		
		
    <!-- OUR CLIENTS TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="white" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="MsoNormal" style="color:#333333; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:400; font-size:14px; line-height:24px; letter-spacing:1px;">
																					WE GROW WITH
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="heading" style="color:#333333; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:26px; line-height:36px; letter-spacing:1px;">
																					OUR ESTEEMED CLIENTS
																				</td>
																			</tr>
																			<tr>
																				<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR CLIENTS TITLE ENDS -->

    <!-- OUR CLIENTS STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-1 -->
												<table align="center" bgcolor="white" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																					<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																						<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																							<tr>
																								<td>
																									<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; font-size:0;">
																										<tr>
																											<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																														<td align="center" valign="top" width="300">
																															<![endif]-->
																															<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;"> 
																																			<!--[if mso]>
																																			<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="300">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" >
																																							<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																								<tr>
																																									<td align="center" style="border-collapse:collapse; font-size:0; padding:10px 0;">
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:auto !important; font-size:0;">
																																											<tr>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/12/AlQUMA-logo.png" alt="130x100x1" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/12/DMC-logo.png" alt="130x100x2" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>	
																												
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="300">
																															<![endif]-->
																															<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE RIGHT -->	
																																<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;"> 
																																			<!--[if mso]>
																																			<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="300">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" >
																																							<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																								<tr>
																																									<td align="center" style="border-collapse:collapse; font-size:0; padding:10px 0;">
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:auto !important; font-size:0;">
																																											<tr>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/12/sab.png" alt="130x100x3" width="100" height="80" style="margin:0; border:0; padding-top:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/12/BIGH.jpeg" alt="130x100x4" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR CLIENTS ENDS -->
    <!-- OUR CLIENTS STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-1 -->
												<table align="center" bgcolor="white" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																					<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																						<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																							<tr>
																								<td>
																									<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; font-size:0;">
																										<tr>
																											<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																														<td align="center" valign="top" width="300">
																															<![endif]-->
																															<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;"> 
																																			<!--[if mso]>
																																			<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="300">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" >
																																							<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																								<tr>
																																									<td align="center" style="border-collapse:collapse; font-size:0; padding:10px 0;">
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:auto !important; font-size:0;">
																																											<tr>


																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2024/03/J.P.Morgan-logo.webp" alt="130x100x1" width="130" height="100" style="margin:0; border:0; padding-top:6px; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/12/LCC-A-tech-mahinadra-company-logo.webp" alt="130x100x2" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>	
																												
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="300">
																															<![endif]-->
																															<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE RIGHT -->	
																																<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;"> 
																																			<!--[if mso]>
																																			<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="300">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" >
																																							<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																								<tr>
																																									<td align="center" style="border-collapse:collapse; font-size:0; padding:10px 0;">
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:auto !important; font-size:0;">
																																											<tr>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/12/Develoopment-logo.webp" alt="130x100x3" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/12/Al-Akaria-logo.png" alt="130x100x4" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR CLIENTS ENDS -->

    <!-- OUR CLIENTS STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-1 -->
												<table align="center" bgcolor="white" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																					<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																						<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																							<tr>
																								<td>
																									<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; font-size:0;">
																										<tr>
																											<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																														<td align="center" valign="top" width="300">
																															<![endif]-->
																															<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;"> 
																																			<!--[if mso]>
																																			<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="300">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" >
																																							<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																								<tr>
																																									<td align="center" style="border-collapse:collapse; font-size:0; padding:10px 0;">
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:auto !important; font-size:0;">
																																											<tr>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/10/Saudi-meters-coompany-logo.png" alt="130x100x1" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/10/Toray-logo.png" alt="130x100x2" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>	
																												
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="300">
																															<![endif]-->
																															<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE RIGHT -->	
																																<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;"> 
																																			<!--[if mso]>
																																			<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="300">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" >
																																							<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																								<tr>
																																									<td align="center" style="border-collapse:collapse; font-size:0; padding:10px 0;">
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:auto !important; font-size:0;">
																																											<tr>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2023/10/Redinagton-logo.png" alt="130x100x3" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://insightss.co/wp-content/uploads/2024/03/footer-logo.png" alt="130x100x4" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR CLIENTS ENDS -->

		
		<!-- GALLERY BUTTON STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
										<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
											<!-- ID:BG SECTION-2 -->
											<table align="center" bgcolor="white" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
												<tbody>	
													<tr>
														<td align="center" class="padding">
															<!--[if mso]>
															<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																<tr>
																	<td align="center">
																		<![endif]-->
																		<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																			<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																				<tr>
																					<td height="15" style="mso-line-height-rule: exactly; line-height:15px; font-size:0;">&nbsp;</td>
																				</tr>
																				<tr>
																				   <td align="center" class="button-width">
																						<!-- ID:BTN COMMON BUTTON -->
																						<table align="center" bgcolor="#00bfff" border="0" cellpadding="0" cellspacing="0" class="display-button">
																							<tr>
																								<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; padding:8px 12px; font-size:12px; letter-spacing:1px;">
																									<a href="https://insightss.co/clients/" style="color:#ffffff; text-decoration:none;cursor: pointer;">Our Clients</a>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																				</tr>
																			</table>
																		</div>
																		<!--[if mso]>
																	</td>
																</tr>
															</table>
															<![endif]-->
														</td>
													</tr>
												</tbody>	
											</table>
										</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- GALLERY BUTTON ENDS -->
		
		<!-- GALLERY BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="white" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- GALLERY BOTTOM SPACE ENDING -->
	
		
		
		<!-- CTA STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if (gte mso 9)|(IE)]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG CTA OPTIONAL -->
									<table align="center" bgcolor="#000000" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
										<tr>
											<td align="center">
												<!--[if gte mso 9]>
												<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:800px; height:393px; margin:auto;">
												<v:fill type="frame" src="https://www.pennyblacktemplates.com/demo/corp/images/800x570.jpg" color="#f6f8f7" />
												<v:textbox inset="0,0,0,0">
												<![endif]-->
												<div style="margin:auto;">
													<table align="center" background="https://insightss.co/wp-content/uploads/2024/04/portfolio-image-scaled.webp" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="background-image:url(https://insightss.co/wp-content/uploads/2024/04/portfolio-image-scaled.webp); background-position:center;background-size: cover; background-repeat:no-repeat;">
														<tr>
															<td align="center" class="padding">
																<!--[if (gte mso 9)|(IE)]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
																	<tr>
																		<td align="center" valign="top" width="600">
																			<![endif]-->
																			<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td height="120" style="mso-line-height-rule: exactly; line-height: 120px; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td align="center">
																							<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="90%" style="width:90%; max-width:90%;">
																								<tr>
																									<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:32px; font-weight:700; letter-spacing:1px; line-height:42px;">
																										<span class="txt-cta-heading">DOWNLOAD OUR <span class="txt-cta-heading1" style="color:#00bfff;"><a href="#" style="text-decoration:none; color:#00bfff;">PROFILE</a></span> </span>
																									</td>
																								</tr>
																								<tr>
																									<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																								</tr>
																								<tr>
																									<!-- ID:TXT CTA CONTENT -->
																									<!-- <td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:400; letter-spacing:1px; line-height:24px;">
																										Get in touch with us or find an office closest to you.
																									</td> -->
																								</tr>
																								<tr>
																									<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																								</tr>
																								<tr>
																								   <td align="center" class="button-width">
																										<!-- ID:BTN CTA BUTTON -->
																										<table align="center" bgcolor="#00bfff" border="0" cellpadding="0" cellspacing="0" class="display-button">
																											<tr>
																												<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; padding:8px 12px; font-size:12px; letter-spacing:1px;">
																													<a href="#" style="color:#ffffff; text-decoration:none;">DOWNLOAD</a>
																												</td>
																											</tr>
																										</table>
																									</td>
																								</tr>
																							</table>		
																						</td>
																					</tr>
																					<tr>
																						<td height="120" style="mso-line-height-rule: exactly; line-height: 120px; font-size:0;">&nbsp;</td>
																					</tr>
																				</table>
																			</div>
																			<!--[if (gte mso 9)|(IE)]>
																		</td>
																	</tr>
																</table>
																<![endif]-->
															</td>
														</tr>
													</table>
												</div>
												<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->	
											</td>
										</tr>
									</table>
								</div>
								<!--[if (gte mso 9)|(IE)]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>	
		<!-- CTA ENDS -->
		
		
		<!-- FOOTER TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG FOOTER -->
										<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="60" style="mso-line-height-rule:exactly; line-height:60px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- FOOTER TOP SPACE ENDING -->
		
		<!-- FOOTER STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG FOOTER -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																		<![endif]-->
																			<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>		
																						<td align="center">
																							<table align="center" border="0" cellspacing="0" cellpadding="0" style="width:auto !important;">
																								<tr>
																									<!-- ID:TXT FOOTER ADDRESS -->
																									<td align="left" valign="middle" width="48">
																										<a href="#" style="color:#666666;text-decoration:none;">
																											<img src="https://insightss.co/wp-content/uploads/2023/11/facebook.png" alt="48x48x5" width="25" height="25" style="margin:0; border:0; padding:0; display:block;" />
																										</a>
																									</td>
																									<td width="20"></td>
																									<td align="left" valign="middle" width="48">
																										<a href="#" style="color:#666666;text-decoration:none;">
																											<img src="https://insightss.co/wp-content/uploads/2023/11/twitter.png" alt="48x48x6" width="25" height="25" style="margin:0; border:0; padding:0; display:block;" />
																										</a>
																									</td>
																									<td width="20"></td>
																									<td align="left" valign="middle" width="48">
																										<a href="#" style="color:#666666;text-decoration:none;">
																											<img src="https://insightss.co/wp-content/uploads/2023/11/instagram.png" alt="48x48x7" width="25" height="25" style="margin:0; border:0; padding:0; display:block;" />
																										</a>
																									</td>
																									<td width="20"></td>
																									
																								</tr>
																							</table>
																						</td>
																					</tr>
																					<tr>
																						<!-- ID:BR FOOTER BORDER -->
																						<td height="20" style="border-bottom:1px solid #cccccc; line-height: 20px; mso-line-height-rule: exactly; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td height="20" style="line-height: 20px; mso-line-height-rule: exactly; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<!-- ID:TXT FOOTER ADDRESS -->
																						<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:400; line-height:24px; letter-spacing:1px;">
																							107 Legend Tower, King Fahd Road, Riyadh – KSA
																						</td>
																					</tr>
																					<tr>
																						<td height="10" style="line-height:10px; mso-line-height-rule: exactly; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<!-- ID:TXT FOOTER MAIL -->
																						<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:400; line-height:24px; letter-spacing:1px;">
																							<a href="#" style="color:#666666;text-decoration:none;">info@insightss.co</a>
																						</td>
																					</tr>
																					<tr>
																						<td height="10" style="line-height:10px; mso-line-height-rule: exactly; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<!-- ID:TXT FOOTER PHONE -->
																						<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:400; line-height:24px; letter-spacing:1px;">
                                                +966 11 2930 665
																						</td>
																					</tr>
																					<tr>
																						<!-- ID:BR FOOTER BORDER -->
																						<td height="20" style="border-bottom:1px solid #cccccc; line-height: 20px; mso-line-height-rule: exactly; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td height="20" style="line-height: 20px; mso-line-height-rule: exactly; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:12px; font-weight:400; line-height:22px; letter-spacing:1px;">
																							<span class="txt-copyright unsub-width">All Rights Reserved </span> 
																							<!-- <span class="txt-unsubscribe unsub-width"><a href="#" style="color:#666666; text-decoration:none;">Unsubscribe</a></span>  -->
																						</td>
																					</tr>
																				</table>
																			</div>
																		<!--[if mso]>
																	</td>
																</tr>
															</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- FOOTER ENDS -->
		
		<!-- FOOTER BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG FOOTER -->
										<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="60" style="mso-line-height-rule:exactly; line-height:60px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- FOOTER BOTTOM SPACE ENDING -->
	</body>
</html>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error while sending email: ' + error);
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
