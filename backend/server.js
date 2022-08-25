const express = require("express");
const cors = require("cors");

const { readdirSync } = require("fs");

const app = express();

app.use(cors());

/* const userRoutes = require("./routes/user");

app.use("/user", userRoutes); */

/* Dynamically adding routes localhost:8000/Routes_File_Name */

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
