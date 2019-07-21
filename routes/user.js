const Joi = require('@hapi/joi');
const userController = require('../controllers/userController');
const commonFunc = require('../utils/commonFunctions');
const logger = require('../utils/logger');
const config = require('../conf/appConfig');

const login = {
  method: 'POST',
  path: '/user/login',
  handler: async (request) => {
    logger.log(request.payload);
    const userData = await userController.login(request.payload.username, request.payload.password);
    return { status: 200, message: 'SUCCESS', data: { token: userData.token } };
  },
  config: {
    tags: ['api', 'admin'],
    validate: {
      payload: {
        username: Joi.string().required(),
        password: Joi.string().required(),
      },
      failAction: commonFunc.failActionFunction,
    },
    plugins: {
      'hapi-swagger': {
        payloadType: 'form',
        responseMessages: config.swaggerDefaultResponseMessages,
      }
    }
  }
}


module.exports = [
  login
]