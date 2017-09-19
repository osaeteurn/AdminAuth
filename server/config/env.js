const path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/authAdminDB',
        secret: 'mysecret',
        port: process.env.PORT || 3000
    },
    /*
    production: {
        db: 'mongodb://url',
        secret: 'abc123',
        port: process.env.PORT || 80
    }
    */
}