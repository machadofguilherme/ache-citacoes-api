const { readFile } = require('fs').promises;
const { resolve } = require('path');

const getQuote = async () => {
  const id = Math.floor(Math.random() * 15) + 1;

  const data = await readFile(resolve('db/data.json'));
  const parsedData = JSON.parse(data);

  const quote = parsedData.find((quote) => quote.id === Number(id));
  return quote;
}

module.exports = {
  getQuote
}