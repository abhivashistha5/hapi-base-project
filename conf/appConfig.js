const conf = {
  port: 8000,
  host: 'localhost',
  swaggerDefaultResponseMessages: [
    { code: 200, message: 'OK' },
    { code: 201, message: 'CREATED' },
    { code: 400, message: 'Bad Request' },
    { code: 401, message: 'Unauthorized' },
    { code: 404, message: 'Data Not Found' },
    { code: 500, message: 'Something went wrong, try again' }
  ]
}

module.exports = conf;