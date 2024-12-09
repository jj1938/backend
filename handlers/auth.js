const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { getByEmail, create } = require("../pkg/account/index.js");
const { validateAccount, AccountRegister } = require("../pkg/account/validate");
const { getSection } = require("../pkg/config");

const register = async (req, res) => {
  try {
    await validateAccount(req.body, AccountRegister);
    const { firstName, lastName, email, phone } = req.body;

    const exist = await getByEmail(email);
    if (exist) {
      return res.status(400).send("Account with this email already exists!");
    }

    const data = {
      firstName,
      lastName,
      email,
      phone,
    };

    const account = await create(data);
    return res.status(200).send(account);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  register,
};
