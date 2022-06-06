const nodemailer = require('nodemailer')

export default function handler(req, res) {

    const transporter = nodemailer.createTransport({
            port: 587,
            host: 'smtp.gmail.com',
            auth: {
                user: 'debiangtk@gmail.com',
                pass: 'gumbiKTGC5625'
            },
            secure: false // true for 465, false for other ports like 587
        },
        function(err, info) {
            if (err) console.log('nodemailer transport error',err)
            else console.log('nodemailer transport info', info)
        }
    )

    const myMail = 'gustavetsopmo.gt@gmail.com';

    // console.log('body', req.body)
    // return

    transporter.sendMail({
        from: req.body.email, // sender address
        replyTo: req.body.email,
        to: myMail, // list of receivers
        subject: `Message From ${req.body.name} [Portfolio]`, // Subject line
        text: req.body.message, // plain text body
        html: `<p>${req.body.message}</p>` // html body
    })
    
    transporter.sendMail({
        from: myMail, // list of receivers 
        replyTo: myMail,
        to: req.body.email, // sender address
        subject: `Notification From [Gustave TSOPMO Portfolio]`, // Subject line
        text: "Hello i successfuly received your message.", // plain text body
        html: `<p>Hello i successfuly received your message.</p>` // html body
    })

    res.status(200).json(req.body)
}