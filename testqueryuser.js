const { user, artwork } = require("./models");

async function artworkWithUser() {
  const lists = await artwork.findAll({
    include: [user],
  });

  return lists.map((list) => list.get({ plain: true }));
}

artworkWithUser().then((lists) => console.log(lists));
