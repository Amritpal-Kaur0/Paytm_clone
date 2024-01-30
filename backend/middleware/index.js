const authMiddleware = require('./middleware');
const {signupBody,updateBody,signinBody,transferBody} = require('./types');

module.exports = {authMiddleware,signupBody,updateBody,signinBody,transferBody};