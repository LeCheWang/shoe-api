const accountRouter = require('./account.router');
const shoeRouter = require("./shoe.router")

module.exports = (app) => {
  app.use('/api/accounts', accountRouter);
  app.use('/api/shoes', shoeRouter);
};
