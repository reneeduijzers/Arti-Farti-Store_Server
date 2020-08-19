"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("artworks", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      }, // defines the relation
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("bids", "artworkId", {
      type: Sequelize.INTEGER,
      references: {
        model: "artworks",
        key: "id",
      }, // defines the relation
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("artworks", "userId");
    await queryInterface.removeColumn("bids", "artworkId");
  },
};
