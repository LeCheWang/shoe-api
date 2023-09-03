const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'account',
      required: true,
      unique: true,
    },
    isOrder: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
    items: [
      {
        shoe: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'shoe',
          required: true,
        },
        size: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Cart = mongoose.model('cartt', cartSchema);

module.exports = Cart;
