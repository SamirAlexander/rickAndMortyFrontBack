const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const { id } = req.params;
  try {
    axios(`${url}${id}`)
      .then((result) => result.data)
      .then((data) => {
        let character = {
          id: data.id,
          image: data.image,
          name: data.name,
          gender: data.gender,
          species: data.species,
          origin: data.origin,
        };
        res.status(200).json(character);
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharDetail;
