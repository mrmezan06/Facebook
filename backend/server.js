const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { readdirSync } = require("fs");

const app = express();

app.use(cors());

/* const userRoutes = require("./routes/user");

app.use("/user", userRoutes); */

/* Dynamically adding routes localhost:8000/Routes_File_Name */

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
