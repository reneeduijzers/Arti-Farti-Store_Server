const { bid, artwork } = require("./models");

async function bidWithArtwork() {
  const lists = await bid.findAll({
    include: [artwork],
  });

  return lists.map((list) => list.get({ plain: true }));
}

bidWithArtwork().then((lists) => console.log(lists));
