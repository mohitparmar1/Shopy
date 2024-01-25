const express = require("express");
const router = require("./routes/user.js");

const app = express();

app.use(express.json());
app.use("/api", router);


app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
