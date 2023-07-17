const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      default:
        'https://rukminim1.flixcart.com/image/450/500/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=90&crop=false',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Shoe = mongoose.model('shoe', shoeSchema);

module.exports = Shoe;
