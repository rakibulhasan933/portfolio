
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = 'force-dynamic'

export const POST = async (request: Request) => {
	const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;
	const transport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: SMTP_EMAIL,
			pass: SMTP_PASSWORD,
		},
	});
	try {
		const body = await request.json();
		const { email, message } = body;
		const testResult = await transport.verify();

		const sendRequest = await transport.sendMail({
			from: email,
			to: SMTP_EMAIL,
			subject: `Feedback for ${email}`,
			html: `<!DOCTYPE html>
		<html lang="en">
		<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Feedback for Arafat Foundation</title>
		<style>
		/* Add basic email styling here */
		body {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
		}
		h1, h2, h3 {
		margin: 1em 0;
		}
		p {
		line-height: 1.5;
		}
		a {
		text-decoration: none;
		color: #007bff;
		}
		</style>
		</head>
		<body>
		<p>${message}</p>
		<p>Sincerely,</p>
		<p> Email:-${email}</p>
		</body>
		</html>`
		});
		return NextResponse.json({ message: "Feedback Sent Successfully" });
	} catch (error) {
		// console.log(error);
		return NextResponse.json({ message: error });
	}
};