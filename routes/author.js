const authorRoute = require('express').Router();

const { getAll } = require('../utils/getAll');

authorRoute.post('/author', async (req, res) => {
  const { author } = req.body;

  const data = await getAll();
  const search = data.filter((content) => content.author === author);
  res.status(200).json(search);
});

module.exports = {
  authorRoute
}