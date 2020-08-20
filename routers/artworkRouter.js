const { Router } = require("express");
const auth = require("../auth/middleware");
const Bid = require("../models/").bid;
const Artwork = require("../models/").artwork;
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const artworksWithBid = await Artwork.findAll({
      include: [Bid],
    });
    res.send(artworksWithBid);
  } catch (e) {
    next(e);
  }
});

router.post("/addbid", auth, async (req, res) => {
  try {
    const { email, amount, artworkId } = req.body;
    const addBid = await Bid.create({
      email,
      amount,
      artworkId,
    });
    res.send(addBid);
  } catch (e) {
    next(e);
  }
});

router.patch("/addheart", async (req, res, next) => {
  try {
    const { artworkId } = req.body;
    const artworkToUpdate = await Artwork.findByPk(artworkId);
    const updatedArtwork = await artworkToUpdate.update(req.body);
    res.send(updatedArtwork);
  } catch (e) {
    next(e);
  }
});

router.post("/addartwork", auth, async (req, res) => {
  try {
    const { title, minimumBid, imageUrl, userId } = req.body;
    const addArtwork = await Artwork.create({
      title,
      minimumBid,
      imageUrl,
      userId,
    });
    res.send(addArtwork);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
