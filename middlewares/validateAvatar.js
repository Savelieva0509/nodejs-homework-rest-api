const validateAvatar = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "Не загружено изображение" });
  }
  next();
};

module.exports = validateAvatar;
