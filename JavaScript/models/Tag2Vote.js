 "use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag2Vote = sequelize.define("Tag2Vote", {
    Tag2VoteID: DataTypes.INTEGER,
    entityID: DataTypes.INTEGER,
    entity: DataTypes.TEXT
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