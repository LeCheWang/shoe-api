const cardModel = require('../models/card.model');

module.exports = {
  getCards: async (req, res) => {
    const user = req.params.user;
    const cards = await cardModel
      .findOne({
        user: user,
      })
      .populate('items.shoe');

    return res.status(200).json(cards);
  },
  createCard: async (req, res) => {
    const user = req.params.user;
    //mảng các item
    const body = req.body;
    const card = await cardModel.findOne({
      user: user,
    });
    let newCard;
    if (!card) {
      newCard = await cardModel.create({
        user: user,
        items: body,
      });
    } else {
      newCard = await cardModel.findOneAndUpdate(
        { user: user },
        { items: card.items.concat(body) },
        { new: true },
      );
    }

    return res.status(200).json(newCard);
  },
  deleteItem: async (req, res) => {
    const user = req.params.user;
    const shoe = req.params.shoe;
    const card = await cardModel.findOne({
      user: user,
    });
    const newItems = card.items.filter((v) => v.shoe != shoe);
    const newCard = await cardModel.findOneAndUpdate(
      { user: user },
      { items: newItems },
      { new: true },
    );

    return res.status(200).json(newCard);
  },
};
