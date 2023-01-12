const authorRoute = require('express').Router();

const { authorService } = require('../services');
const { authorController } = require('../controllers');
const { validate } = require('../middlewares');

authorRoute.post(
  '/author',
  validate.fieldValidator,
  authorController.authorValidate, (req, res) => {
  const { author } = req.body;
  const search = authorService.findAuthor(author);

  res.status(200).json(search);
});

module.exports = {
  authorRoute
}