const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT= process.env.PORT||5000;

//middleware
app.use(express.static('public'));
app.use(express.json())


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req, res) =>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'milayamoyacorazon@gmail.com',
            pass: 'Belle1993'
        }

    })

    const mailOptions = {
        from: req.body.nodemailer,
        to: 'milayamoyacorazon',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions,(error, info) =>{
        if(error){
            console.log(error);
            res.send(error);

        }else{
            console.log('Email sent:' + info.response);
            alert('message sent');
            res.send(success)
        }
    })

})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})