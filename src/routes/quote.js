const quoteRoute = require('express').Router();

const { quoteModel } = require('../models/index');

quoteRoute.get('/', async (_req, res) => {
  const find = await quoteModel.getQuote();
  res.status(200).json(find);
});

module.exports = {
  quoteRoute,
}