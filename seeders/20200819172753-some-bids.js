"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "bids",
      [
        {
          email: "bid1@gmail.com",
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 1,
        },
        {
          email: "bid2@gmail.com",
          amount: 75,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 1,
        },
        {
          email: "bid3@gmail.com",
          amount: 550,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 2,
        },
        {
          email: "bid4@gmail.com",
          amount: 600,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 2,
        },
        {
          email: "bid5@gmail.com",
          amount: 101,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 3,
        },
        {
          email: "bid6@gmail.com",
          amount: 105,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 3,
        },
        {
          email: "bid7@gmail.com",
          amount: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 5,
        },
        {
          email: "bid8@gmail.com",
          amount: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 5,
        },
        {
          email: "bid9@gmail.com",
          amount: 155,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 6,
        },
        {
          email: "bid10@gmail.com",
          amount: 175,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 6,
        },
        {
          email: "bid11@gmail.com",
          amount: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 6,
        },
        {
          email: "bid12@gmail.com",
          amount: 251,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 6,
        },
        {
          email: "bid13@gmail.com",
          amount: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 7,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("bids", null, {});
  },
};
