const favorites = require("../utils/favs");

const postFavorites = (req, res) => {
  const character = req.body;
  console.log("Line 5", character);
  if (character) {
    favorites.push(character);
  }
  res.status(200).send("add new character to favorites list");
};

module.exports = postFavorites;
