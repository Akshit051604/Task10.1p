const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sgMail = require('@sendgrid/mail');

// Replace with your SendGrid API key
sgMail.setApiKey('SG.zXjquQnFQfqoiqWJzszs6Q.67zQ4SSqh-LBNxnzmoW_azB9GwqLlTQWHPliO1ztaaA');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(8080, function () {
    console.log('Server is running on port 8080');
});

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.post('/', function (request, response) {
    const fname = request.body.firstname;
    const lname = request.body.lastname;
    const email = request.body.gmail;

    console.log(fname, lname, email);

    const msg = {
        to: email,
        from: 'akshit4758.be23@chitkara.edu.in',  // Replace with your verified sender email
        templateId: 'd-8554c5af18a8469d8edbd7ebb12e8702',  // Replace with your dynamic template ID
        dynamic_template_data: {
            firstname: fname,
            lastname: lname
        },
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            response.send('Success! Email has been sent.');
        })
        .catch((error) => {
            console.error(error);
            response.send('Error sending email.');
        });
});
