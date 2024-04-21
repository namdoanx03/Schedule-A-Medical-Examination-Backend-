require('dotenv').config()
import nodemailer from 'nodemailer'

let sendSimpleEmail = async (datasend) => {
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
        to: datasend.reciverEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh ✔", // Subject line
        html: `
            <h3>Xin chào ${datasend.patientName}!</h3>
            <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Namdoanx Hospital</p>
            <p>Thông tin đặt lịch khám bệnh:</p>
            <div><b>Thời gian: ${datasend.time}</b></div>
            <div><b>Bác sĩ: ${datasend.doctorName}</b></div>
            <p>Nếu các thông tin trên là đúng sự thật , vui lòng click vào đường link bên dưới
            dể xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
            <div><a href = ${datasend.redirectLink} target="_blank">Click here</a></div>
            <div>Xin chân thành cảm ơn!</div>
        `, // html body
    });

}


module.exports = {
    sendSimpleEmail: sendSimpleEmail
}