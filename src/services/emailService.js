require("dotenv").config();
import nodemailer from "nodemailer";
// const nodemailer = require("nodemailer");
let sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "huutri91thcslvm@gmail.com",
      pass: "cdmj vjky syba odkf",
    },
  });
  let info = await transporter.sendMail({
    from: '"Trí bùi 👻" <huutri91thcslvm@gmail.com>', // sender address
    to: dataSend.recieverEmail, // list of receivers
    subject: "Thông tin đặt lịch khám bệnh", // Subject line
    html: getBodyHTMLEmail(dataSend),
  });
};

let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
<h3>Xin chào ${dataSend.patientName} !</h3>
<p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên booking care</p>
<p>Thông tin đặt lịch khám bệnh</p>
<div><b>Thời gian: ${dataSend.time}</b></div>
<div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
<p>Click vào link bên dưới để xác nhận thông tin đặt lịch khám bệnh</p>
<div><a href=${dataSend.redirectLink} target="_blank">Click me</a></div>
<div>Thân gửi đến bạn ${dataSend.patientName}</div>

`;
  }
  if (dataSend.language === "en") {
    result = `
<h3>Dear ${dataSend.patientName} !</h3>
<pYou received this email because you booked an online medical appointment on booking care</p>
<p>Information on scheduling medical examinations</p>
<div><b>Schedule time: ${dataSend.time}</b></div>
<div><b>Doctor: ${dataSend.doctorName}</b></div>
<p>Click on the link below to confirm medical appointment information</p>
<div><a href=${dataSend.redirectLink} target="_blank">Click me</a></div>Thông tin đặt lịch khám bệnh
<div>For you ${dataSend.patientName}</div>

`;
  }
  return result;
};

let getBodyHTMLEmailRemedy = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
<h3>Xin chào ${dataSend.patientName} !</h3>
<p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên booking care thành công </p>
<p>Thông tin đơn thuốc / hóa đơn được gửi trong file đính kèm</p>
<div>Xin chân thành cảm ơn</div>

`;
  }
  if (dataSend.language === "en") {
    result = `
<h3>Dear ${dataSend.patientName} !</h3>
<pYou received this email because you booked an online medical appointment on booking care susceed</p>
<p>Information on scheduling medical examinations in attach ment</p>
<p>Sincely thanks</p>
`;
  }
  return result;
};

let sendAttachment = async (dataSend) => {
  return new Promise(async (resolve, reject) => {
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "huutri91thcslvm@gmail.com",
          pass: "cdmj vjky syba odkf",
        },
      });
      let info = await transporter.sendMail({
        from: '"Trí bùi 👻" <huutri91thcslvm@gmail.com>', // sender address
        to: dataSend.email, // list of receivers
        subject: "Kết quả đặt lịch khám bệnh", // Subject line
        html: getBodyHTMLEmailRemedy(dataSend),
        attachments: [
          {
            // encoded string as an attachment
            filename: `remedy - ${dataSend.patientId} - ${
              dataSend.patientName
            } - ${new Date().getTime()}.png`,
            content: dataSend.imgBase64.split("base64,")[1],
            encoding: "base64",
          },
        ],
      });

      // console.log(info);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

// async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // send mail with defined transport object
//  ;

// //   console.log("Message sent: %s", info.messageId);
// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
// //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
// //       <https://github.com/forwardemail/preview-email>

// }

// main().catch(console.error);
module.exports = {
  sendSimpleEmail: sendSimpleEmail,
  sendAttachment: sendAttachment,
};
