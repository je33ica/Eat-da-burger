
const express = require("express");
const burgers = require("../models/burger.js");
var router = express.Router();



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

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burgers.selectAll(function (burgers) {
    var hbsObject = {
      burgers: burgers
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// //create new burger
// router.post('/api/burgers/create', (req, res) => {
//   burgers.create(
//     req.body.burger_name, (res) => {
//       // Send back the ID of the new quote
//       res.render( res );
//     });
// });

// // updating the burgers that have been devoured
// router.put('/api/burgers/:id', (req, res) => {
//   const condition = `id = ${req.params.id}`;
//   burgers.update(
//     { devoured: true },
//     condition,
//     (result) => {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });



//  console.log('condition', condition);

module.exports = router;