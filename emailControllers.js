const express = require('express')
const bodyparser = require('body-parser')
const https = require('https')
const e = require('express')
const app = express()

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))

app.listen(8080, function(request, response){
console.log('port is running on 8080')
})

app.get('/', function(request, response)
{
    response.sendFile(__dirname + '/index.html')
})

app.post('/', function(request,response)
{
    const fname = request.body.firstname;
    const lname = request.body.lastname;
    const email = request.body.gmail;
    console.log(fname, lname, email);

    const apik = "0bd0dd8e22afe20e23971b89885f9694-us22";
    const list_id = "58ec24c56e";
    const url = "https://us22.api.mailchimp.com/3.0/lists/58ec24c56e";

    const options = {
        method:"POST",
        auth:"ak:0bd0dd8e22afe20e23971b89885f9694-us22"
    }
    const data= {
        members: [{email_addres:email,
        status:"subscribed",
        merge_field: {
            FNAME:fname,
            LNAME:lname
        }
    }]
    }
    const jsonData = JSON.stringify(data)    

    const req= https.request(url, options, function(response)
    {
        response.on("data", function(data)
    {
        console.log(jsonData.parse(data))
    })
    })

    req.write(jsonData)
    req.end()
    console.log(fname, lname, email)
})
