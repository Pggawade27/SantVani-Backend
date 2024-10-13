const nodemailer = require('nodemailer')

const mailSender = async (email, title, body) => {

    console.log('Email:', process.env.EMAIL);
    console.log('Email Password:', process.env.EMAIL_PASS);

    
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        })

        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: title,
            html: body
        })

        return info
    } catch (error) {
        console.log(error, 'error occurs while sending mail')
    }
}

module.exports = mailSender