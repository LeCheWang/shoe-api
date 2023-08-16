const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    total_money: {
      type: Number,
      requried: true,
    },
    payment_method: {
      type: String,
      enum: ["On Delivery", "Online"],
      default: "On Delivery"
    },
    is_payment: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
    status: {
        type: String,
        enum: ["To Ship", "To Receive", "Completed", "Cancelled"], 
        default: "To Ship"
    },
    card: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'card',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('order', orderSchema);
