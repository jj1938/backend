const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
});

const AccountsModel = mongoose.model("Account", accountSchema, "giveaway");

const read = async () => {
  return await AccountsModel.find();
};

const create = async (data) => {
  const newAccount = new AccountsModel(data);
  return await newAccount.save();
};

const remove = async (_id) => {
  return await AccountsModel.deleteOne({ _id });
};

const getByEmail = async (email) => {
  return await AccountsModel.findOne({ email });
};

module.exports = {
  read,
  create,
  getByEmail,
  remove,
};
