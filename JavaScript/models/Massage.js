"use strict";

module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("message", {
        Uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
            // validate: {
            //     isUUID: true
            // }
        },
        messageContent: DataTypes.STRING
    });

    return Message;
};