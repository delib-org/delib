var Sequelize = require('sequelize');
var mediator = new Sequelize('DelibDB', 'postgres', 'postgres@!#@$#%$666', {
    dialect: 'postgres'
});

var Users = mediator.define('users', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    nickName: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        isEmail: true,
        notEmpty: true
    },
    hashedPassword: Sequelize.STRING,
    language: Sequelize.STRING,
    fbID: Sequelize.STRING,
    fbToken: Sequelize.STRING,
    fbProfileImageURL: {
        type: Sequelize.STRING,
        isUrl: true
    },
    joinDate: {
        type: Sequelize.DATE,
        isDate: true
    }
});

var Groups = mediator.define('groups', {
    topic: Sequelize.STRING,
    owner: Sequelize.STRING,
    coverPhoto: {
        type: Sequelize.STRING,
        isUrl: true
    },
    titleBody: Sequelize.TEXT,
    uuid: {
        type: Sequelize.INTEGER,
        isUuid: true
    }
});

var Questions = mediator.define('questions', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    discussionID: Sequelize.INTEGER,
    userID: Sequelize.INTEGER,
    uuid: {
        type: Sequelize.INTEGER,
        isUuid: true
    }
    // Uncomm. and fill in <<type>> when defined
    //stateofVisual: Sequelize.<<type>>
});

var Options = mediator.define('options', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    questionID: Sequelize.INTEGER
});

var Paragraphs = mediator.define('paragraphs', {
    bodyHtml: Sequelize.TEXT,
    optionID: Sequelize.INTEGER
});

var Voters = mediator.define('voters', {
    userID: Sequelize.INTEGER,
    entityID: Sequelize.INTEGER,
    //entity: Sequelize.<<type>>
    value: Sequelize.FLOAT
});


mediator.sync();
