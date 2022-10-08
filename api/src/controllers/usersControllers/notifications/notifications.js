const nodemailer = require("nodemailer")
const { HOST_EMAIL, PORT_EMAIL, EMAIL, EMAIL_PASS } = process.env;

async function bannedUserNotification(email,banned){
    let transporter = nodemailer.createTransport({
        host: `${HOST_EMAIL}`,
        port:`${PORT_EMAIL}`,
        secure:false,
        auth:{
            user:`${EMAIL}`,
            pass:`${EMAIL_PASS}`
        }
    });


if(banned.toString() == "false"){
    return transporter.sendMail({
        from: "nutri.u.contact@gmail.com",
        to: email,
        subject:"Your nutri-u account has been unbanned",
        html:`<p>Your account has been unbanned for administrator<a href="nutri.u.contact@gmail.com">nutri.u.contact@gmail.com</a></p>`,
    })
}

if(banned.toString() == "true") {
    return transporter.sendMail({
        from: "nutri.u.contact@gmail.com",
        to: email,
        subject:"Your nutri-u account has been banned",
        html:`<p>You were blocked by a Nutri-u administrator, if you see that this was an error, contact this email<a href="nutri.u.contact@gmail.com">nutri.u.contact@gmail.com</a></p>`,
    })
}


}


module.exports = {
    //adminLogin,
    bannedUserNotification
}