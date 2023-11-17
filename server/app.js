if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const router = require("./routers/index");
// const errorHandler = require("./middlewares/errorHandler");
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
// app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`app is listening on port : ${port}`);
// });

module.exports = app;
