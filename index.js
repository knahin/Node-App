const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Express app is running by Knahin23 EC2 machine just try to make autmaiton for this application🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

