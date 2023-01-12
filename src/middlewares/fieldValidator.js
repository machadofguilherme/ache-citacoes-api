const fieldValidator = (req, res, next) => {
  const { author } = req.body;

  if (!author) {
    return res.status(404).json({
      message: "Corpo inválido"
    });
  }

  return next();
}

module.exports = {
  fieldValidator
}