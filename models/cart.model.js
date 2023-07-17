const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
    required: true,
    unique: true
  },
  items: [
    {
      shoe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shoe',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }
  ] 
}, {
    versionKey: false,
    timestamps: true
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;