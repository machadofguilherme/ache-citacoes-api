const { authorModel } = require('../models');

const findAuthor = async (author) => {
  const data = await authorModel.getAll();
  const search = data.filter((content) => content.author === author);
  
  if (!search) return { message: 'Autor não encontrado' };

  return { response: search };
}

module.exports = {
  findAuthor
}