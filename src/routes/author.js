const authorRoute = require('express').Router();

const { authorModel } = require('../models/index');

authorRoute.post('/author', async (req, res) => {
  const { author } = req.body;

  const data = await authorModel.getAll();
  const search = data.filter((content) => content.author === author);
  res.status(200).json(search);
});

module.exports = {
  authorRoute
}