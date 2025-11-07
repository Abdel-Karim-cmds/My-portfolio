const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())
const { sendMail } = require('./Mailing');

app.set('views', 'views')
app.set('view engine', 'hbs');
app.use(express.static('public'))
require('dotenv').config();


app.get('/', (req, res) => {
    res.render('index', { title: 'My Portfolio' });
})

app.get('/fr', (req, res) => {
    res.render('index_fr', { title: 'Mon Portfolio' });
})

app.post('/send-email',(req, res) => {
    const { fullname, email, message } = req.body;
    sendMail({ fullname, email, message })
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error('Error in sending email:', error);
            res.json({ success: false });
        });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});