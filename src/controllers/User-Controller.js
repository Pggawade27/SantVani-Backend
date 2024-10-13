const mailSender = require("../utils/mailSender")

const register = async (req, res) => {
    const { email, password } = req.body
    const emailResponse = await mailSender(
        'prasadgawade7520@gmail.com',
        'Verification Email',
        `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: </p>`
    )
    console.log(emailResponse)
    if (!emailResponse) {
        res.status(500).json({ message: 'Internal Server Error' })
    } else {
        res.status(200).json({ message: 'OTP has been send to your email address' })
    }
}

module.exports = register