const { Validator } = require("node-input-validator");

const AccountRegister = {
  firstName: "required|string",
  lastName: "required|string",
  email: "required|string",
  phone: "required|integer",
};

const validateAccount = async (data, schema) => {
  const validator = new Validator(data, schema);
  const err = await validator.check();

  if (!err) {
    throw {
      code: 400,
      error: "Error",
    };
  }
};

module.exports = {
  AccountRegister,
  validateAccount,
};
