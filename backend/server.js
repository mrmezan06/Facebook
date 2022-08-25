const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

/* const userRoutes = require("./routes/user");

app.use("/user", userRoutes); */

/* Dynamically adding routes localhost:8000/Routes_File_Name */
// Routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

// Database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log("Error connection - ", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
