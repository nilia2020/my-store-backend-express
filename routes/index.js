const productRouter = require('./products.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  app.use('/products', productRouter);
  app.use('/user', userRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
