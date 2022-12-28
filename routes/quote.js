const quoteRoute = require('express').Router();

const { getQuote } = require('../utils/getQuote');

quoteRoute.get('/', async (_req, res) => {
  const find = await getQuote();
  res.status(200).json(find);
});

module.exports = {
  quoteRoute,
}