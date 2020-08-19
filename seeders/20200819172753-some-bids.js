"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "bids",
      [
        {
          email: "bid1@gmail.com",
          amount: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 2,
        },
        {
          email: "bid2@gmail.com",
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 1,
        },
        {
          email: "bid3@gmail.com",
          amount: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 3,
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
          amount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("bids", null, {});
  },
};
