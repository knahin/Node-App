const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Express app is running by Knahin23 EC2 machine🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

