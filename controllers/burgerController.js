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

router.delete("/api/burgers/:id", (req, res) => {
  const condition = `${req.params.id}`;
  console.log("im the condition in b controller", condition);
  burgers.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});
module.exports = router;
