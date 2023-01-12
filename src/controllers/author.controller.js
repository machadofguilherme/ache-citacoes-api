const { authorService } = require('../services');
const authorValidate = async (req, res) => {
  const { author } = req.body;
  const check = await authorService.findAuthor(author);

  if (check.message) return res.status(404).json({
    message: 'Corpo inválido.'
  });

  return res.status(200).json(check.response);
}

module.exports = {
  authorValidate
}