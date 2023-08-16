const accountRouter = require('./account.router');
const shoeRouter = require('./shoe.router');
const cardRouter = require('./card.router');

module.exports = (app) => {
  app.use('/api/accounts', accountRouter);
  app.use('/api/shoes', shoeRouter);
  app.use('/api/cards', cardRouter);
  app.use('/*', (req, res) => {
    res.json({
      statusCode: 404,
      message: 'page not found',
    });
  });
};
