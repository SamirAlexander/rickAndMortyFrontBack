const express = require("express");
const router = express.Router();
//Controllers
const postFavorites = require("../controllers/postFavorites");
const getFavorites = require("../controllers/getFavorites");
const deleteFavorite = require("../controllers/deleteFavorite");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", postFavorites);
router.get("/fav", getFavorites);
router.delete("/fav/:id", deleteFavorite);

module.exports = router;
