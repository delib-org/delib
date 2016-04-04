 "use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag2Vote = sequelize.define("Tag2Vote", {
    Tag2VoteID: Sequelize.INTEGER,
    entityID: Sequelize.INTEGER,
    entity: Sequelize.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Tag2Vote.belongsTo(models.Tag2Vote, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Tag2Vote;
};  