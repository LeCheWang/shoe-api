const express = require('express');
const router = express.Router();

const {
  getCards,
  createCard,
  deleteItem,
} = require('../controllers/card.controller');

router.route('/:user').get(getCards).post(createCard);

router.route('/:user/:shoe').delete(deleteItem);

module.exports = router;
