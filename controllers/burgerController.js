var express = require("express");
const burgers = require("../models/burger.js");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers")
});

router.get("/burgers", function(req, res) {


  burgers.selectAll(burgers => {
    res.render("index", burgers );
  });
    // burgers.selectAll(function(data) {

    //   var hbsObject = { burgers: data };
    
    //   console.log("these are the burgers",hbsObject);
    
    //   res.render("index",hbsObject );
    // });
  });

//   // Route get route.
// router.get('/', (req, res) => {
//     connection.query('SELECT * FROM burgers;', (err, burgers) => {
//       if (err) {
//         throw err;
//       }
  
//       // Test it.
//       // console.log('The solution is: ', data);
  
//       // Test it.
//       // res.send(data);
  
//       res.render('index', { burgers });
//     });
//   });

  router.post('/api/burgers', (req, res) => {
    burgers.create(
      req.body.burger_name, (result) => {
      // Send back the ID of the new quote
      res.render ({ id: result.insertId });
    });
  });

  router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    burgers.update(
        { devoured: true }, 
        condition,
        (result) => {
            if (result.changedRows === 0) {
              // If no rows were changed, then the ID must not exist, so 404
              return res.status(404).end();
            }
            res.status(200).end();
          }
        );
      });
  
      router.delete('/api/burgers/:id', (req, res) => {
        const condition = `id = ${req.params.id}`;
     //   const condition = "id = " + req.params.id;
      
        burgers.delete(condition, (result) => {
          if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
        });
      });


  //  console.log('condition', condition);

  module.exports = router;