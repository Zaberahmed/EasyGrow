import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + './../.env' });

const sendOTP = async (name: string, email: string, otp: string) => {
  const config = {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);

  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'EasyGrow',
      link: 'https://easygrow.com',
    },
  });

  const response = {
    body: {
      name: name,
      intro: 'Your OTP code is: ' + otp,
      code: otp,
    },
  };

  const emailBody = mailGenerator.generate(response);

  const message = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Welcome to Easy grow',
    html: emailBody,
  };

  await transporter.sendMail(message);
};

export { sendOTP };
