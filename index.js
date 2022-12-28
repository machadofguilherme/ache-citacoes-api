const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');

const { quoteRoute } = require('./routes/quote');
const { authorRoute } = require('./routes/author');

const app = express();

app.use(cors());
app.use(express());
app.use(bodyParser.json());
app.use(quoteRoute);
app.use(authorRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Rodando...'));