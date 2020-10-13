"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "artworks",
      [
        {
          title: "Balloon Dog",
          imageUrl:
            "https://www.artdependence.com/media/6203/cel14_sm.jpg?anchor=center&mode=crop&width=300&rnd=131722012560000000",
          hearts: 5,
          minimumBid: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Puck",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Jonge_Italiaanse_vrouw_met_de_hond_Puck_Rijksmuseum_SK-A-1703.jpeg/800px-Jonge_Italiaanse_vrouw_met_de_hond_Puck_Rijksmuseum_SK-A-1703.jpeg",
          hearts: 7,
          minimumBid: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "David",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/David_von_Michelangelo.jpg/260px-David_von_Michelangelo.jpg",
          minimumBid: 100,
          hearts: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("artworks", null, {});
  },
};
