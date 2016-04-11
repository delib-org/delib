 "use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag2Vote = sequelize.define("tag2vote", {
    Tag2VoteID: DataTypes.INTEGER,
    entityID: DataTypes.INTEGER,
    entity: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Tag2Vote.belongsTo(models.tag, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        Tag2Vote.belongsTo(models.vote, {
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