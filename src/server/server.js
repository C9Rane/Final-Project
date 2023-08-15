const express = require('express');
const cors = require('cors');
const hiscores = require("osrs-json-hiscores");

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get("/hiscores/:skill", (req, res) => {
  console.log(req.params.skill);
  hiscores
    .getSkillPage(req.params.skill)
    .then((response) => {
      console.log(response);
      res.send(response)
    })
    .catch((err) => {
      res.status(404).send({ status: 404, error: err });
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));