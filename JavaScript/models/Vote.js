"use strict";

module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("vote", {
    VoteID: Sequelize.INTEGER,
    entityID: Sequelize.INTEGER,
    entity: Sequelize.TEXT,
    value: Sequelize.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        Vote.belongsTo(models.Vote, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Vote;
};