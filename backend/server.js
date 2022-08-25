const express = require("express");
const cors = require("cors");
const app = express();

// const options = {
//   origin: "http://localhost:7000",
//   useSuccessStatus: 200,
// };

/* const allowedOrigins = ["http://localhost:7000", "http://localhost:3000"];

function options(req, res) {
  let tmp;
  let origin = req.header("Origin");
  if (allowedOrigins.indexOf(origin) > -1) {
    tmp = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    tmp = {
      origin: false,
      optionSuccessStatus: 403,
    };
  }
  res(null, tmp);
}

app.use(cors(options));
*/

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
