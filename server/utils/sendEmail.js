import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICES,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.mail,
    subject: options.subject,
    html: options.messageContent,
  };

  const mailInfo = transporter.sendMail(mailOptions, (error, result) => {
    if (error) {
      console.log(error);
      //   throw new Error("OTP can't be send");
    }
  });
  console.log(mailInfo);
};

export { sendEmail };
