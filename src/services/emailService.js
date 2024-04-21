require('dotenv').config()
import nodemailer from 'nodemailer'

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Nam Doãn 👻" <dpnbro1102@gmail.com>', // sender address
        to: dataSend.reciverEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh ✔", // Subject line
        html: getBodyHTMLEmail(dataSend)
    });

}
let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
        <h3>Xin chào ${dataSend.patientName}!</h3>
            <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Namdoanx Hospital</p>
            <p>Thông tin đặt lịch khám bệnh:</p>
            <div><b>Thời gian: ${dataSend.time}</b></div>
            <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
            <p>Nếu các thông tin trên là đúng sự thật , vui lòng click vào đường link bên dưới
            dể xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
            <div><a href = ${dataSend.redirectLink} target="_blank">Click here</a></div>
            <div>Xin chân thành cảm ơn!</div>
        `
    }
    if (dataSend.language === 'en') {
        `
        <h3>Dear ${dataSend.patientName}!</h3>
            <p>You received this email because you made an online medical appointment at Namdoanx Hospital</p>
            <p>Information for scheduling medical examination:</p>
            <div><b>Time: ${dataSend.time}</b></div>
            <div><b>Doctor: ${dataSend.doctorName}</b></div>
            <p>If the above information is true, please click on the link below to confirm and complete the medical appointment procedure.</p>
            <div><a href = ${dataSend.redirectLink} target="_blank">Click here</a></div>
            <div>Sincerely thank!</div>
        `
    }
    return result
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail
}