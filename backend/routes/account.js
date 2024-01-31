const express = require("express");
const { authMiddleware, transferBody } = require("../middleware/index");
const { Account } = require("../models");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({ userId: req.userId });
  res.json({ balance: account.balance });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  console.log("Before startSession");
  const session = await mongoose.startSession();
  session.startTransaction();
  console.log("After startSession");

  const { success } = transferBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ error: "Invalid Inputs" });
  }
  const { to, amount } = req.body;

  // Fetch the accounts within the transaction
  const fromAccount = await Account.findOne({ userId: req.userId }).session(
    session
  );

  if (!fromAccount || fromAccount.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({ error: "Insufficient Balance" });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({ error: "Invalid Account" });
  }
  // Update the balances
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  // Commit the transaction
  await session.commitTransaction();

  console.log("Transaction was successfully completed");
  res.json({
    message: "Transfer successfull",
  });
});

module.exports = router;
