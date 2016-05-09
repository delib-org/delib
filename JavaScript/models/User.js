"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      Uuid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true
          // validate: {
          //     isUUID: true
          // }
      }, 
      firstName: DataTypes.STRING, 
      lastName: DataTypes.STRING, 
      nickName: DataTypes.STRING, 
      email: {
          type: DataTypes.STRING, 
          isEmail: true
          //notEmpty: true
      }, 
      hash: {
          type: DataTypes.STRING
          // validate: {
          //     //notNull: true,
          //     //notEmpty: true
          // }
      },
      language: DataTypes.STRING,
      fbID: DataTypes.STRING,  
      fbToken: DataTypes.STRING, 
      fbProfileImageURL: {
          type: DataTypes.STRING, 
          validate: {
              isUrl: true
          }
      }, 
      joinDate: {
          type: DataTypes.DATE, 
          validate: {
              isDate: true
          }
      }
  }, {
      classMethods: {
          associate: function(models) {
              User.hasMany(models.role, {
                  onDelete: "CASCADE", 
                  foreignKey: {
                      allowNull: false
                  }
              });
          }, 
          validatePassword: function(passwd, user){
              User.findOne({ nickName: user }, function(err, user) {
                  //ERRORS..
                  if (err) {
                      // user not found
                      return err.alert("user not found");
                  }
                  
                  var isMatch = bcrypt.compare(passwd, hash, function (err, res) {
                      //password match
                      if(res)
                        return true;
                      
                      // incorrect password
                      return false;
                  });
                  
                  return isMatch;
              });
          }
      }
  });

    var bcrypt = require('bcrypt');

    User.beforeCreate(function(user,options, fn) {

        bcrypt.genSalt(10, function (err, salt) {

            if (err) {
                fn(err, null);
                return;
            }

            bcrypt.hash(user.hash, salt, function (err, hash) {
                if (err) {
                    fn(err, null);
                    return;
                }
                console.log(hash + user.hash);
                user.hash = hash;
                fn(null, user);
            });
        });
    });

  return User;
};