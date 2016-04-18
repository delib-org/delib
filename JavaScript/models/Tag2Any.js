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
        
        Tag2Any.belongsTo(models.question, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Tag2Any.belongsTo(models.group, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Tag2Any.belongsTo(models.option, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Tag2Any.belongsTo(models.issue, {
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