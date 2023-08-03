// const app = require("./app");

// app.listen(process.env.PORT || 5000, () => {
//     console.log("Server running. Use our API on port: 5000");
// });
require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const { DB_HOST, PORT = 5000 } = process.env;

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () =>
      console.log(`Server running. Use our API on port: ${PORT}`)
    );
  })

  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
