//este middleware tiene next, puede seguir con otro middleware
function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}
//Este middleware no tiene next entonces acá se termina
//la secuencia de middlewares
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}
module.exports = { logErrors, errorHandler, boomErrorHandler };
