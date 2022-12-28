const { readFile } = require('fs').promises;

const getAll = async () => {
  const data = await readFile('db/data.json');
  const parsedData = JSON.parse(data);
  return parsedData;
}

module.exports = {
  getAll
}