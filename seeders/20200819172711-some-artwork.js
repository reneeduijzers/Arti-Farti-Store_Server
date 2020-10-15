"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "artworks",
      [
        {
          title: "Balloon Dog",
          imageUrl:
            "https://www.itsliquid.com/wp-content/uploads/2020/04/jeff_koons_00-17.jpg",
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
        {
          title: "Girl with Balloon",
          imageUrl:
            "https://desenio.nl/bilder/artiklar/zoom/8448_2.jpg?imgwidth=435&qt=Banksy%20Poster",
          minimumBid: 5,
          hearts: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Smoking Skeleton",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Vincent_van_Gogh_-_Head_of_a_skeleton_with_a_burning_cigarette_-_Google_Art_Project.jpg",
          minimumBid: 33,
          hearts: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Mona",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/266px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
          minimumBid: 150,
          hearts: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Pharaoh",
          imageUrl:
            "https://mymodernmet.com/wp/wp-content/uploads/2017/08/Famous-Sculpture-Nofretete-Neues-Museum.jpg",
          minimumBid: 70,
          hearts: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("artworks", null, {});
  },
};
