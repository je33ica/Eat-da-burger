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
  // console.log("im the condition", condition);
  burgers.update(req.params.id, function () {
    (result) => {
      result.status(200);
    };
  });
});

//create new burger
router.post("/api/burgers", (req, res) => {
  burgers.create(req.body.name, (createdBurger) => {
    res.json(createdBurger);
  });
});

//  console.log('condition', condition);

module.exports = router;

// Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//   res.redirect("/burgers")
// });

// //show all burgers - available and devoured
// router.get("/burgers", function (req, res) {

//   burgers.selectAll(burgers => {
//     res.render("index", burgers);
//   });
//   burgers.selectAll(function(data) {
//     var hbsObject = { burgers: data };
//     console.log("these are the burgers",hbsObject);
//     res.render("index",hbsObject );
//   });
// });
