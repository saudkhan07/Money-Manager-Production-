const mongoose = require("mongoose");

const trasactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      requiere: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    reference: {
      type: String,
      //  required: [true,'reference is required']
    },
    description: {
      type: String,
      // required: [true, "description is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", trasactionSchema);
module.exports = transactionModel;
