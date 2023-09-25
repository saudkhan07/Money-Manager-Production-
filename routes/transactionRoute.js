const express = require("express");
const {
  addAllTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routes
//add transaction POST method
router.post("/add-transaction", addAllTransaction);

//get transaction
router.post("/get-transaction", getAllTransaction);

//edit transaction
router.post("/edit-transaction", editTransaction);

//delete transaction
router.post("/delete-transaction", deleteTransaction);

module.exports = router;
