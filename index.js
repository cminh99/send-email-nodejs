require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/contact', require('./routes/contact.route'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
