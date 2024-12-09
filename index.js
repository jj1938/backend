const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const cors = require("cors");
const connectDB = require("./pkg/db/config");
connectDB();

const { getSection } = require("./pkg/config");
const { register } = require("./handlers/auth");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/", register);

app.listen(getSection("development").port, () =>
  console.log(`Server started at port ${getSection("development").port}`)
);
