const favorites = require("../utils/favs");

deleteFavorite = (req, res) => {
  const { id } = req.params;
  if (id) {
    favorites = favorites.filter((e) => {
      e.id !== id;
    });
  }
  res.status(200).json({ succes: true });
};

module.exports = deleteFavorite;
