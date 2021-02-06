const express = require("express");
const burgers = require("../models/burger.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burgers.selectAll(function (burgers) {
    var burgersFromDb = {
      burgers,
    };
    res.render("index", burgersFromDb);
  });
});

// updating the burgers- use ID to identify where clicked -
//devoured will be set to true(1) in the MYSL query in orm
router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  burgers.update(req.params.id, function () {
    (result) => {
      result.status(200);
    };
  });
});

//create new burger
//send the res(response) back with the new created burger
router.post("/api/burgers", (req, res) => {
  burgers.create(req.body.name, (createdBurger) => {
    res.json(createdBurger);
  });
});

module.exports = router;
