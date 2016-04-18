 "use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag2Any = sequelize.define("tag2any", {
    tag2VoteUuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    },
    entityUuid: {
        type: DataTypes.UUID,
        validate: {
            isUUID: true
        }
  },
    entity: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Tag2Any.belongsTo(models.tag, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        Tag2Any.belongsTo(models.vote, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Tag2Any;
};  