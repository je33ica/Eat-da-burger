// Import MySQL connection.
const connection = require("../config/connection.js");
// const { update } = require("../models/burger.js");

const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, (err, burgers) => {
      if (err) {
        throw err;
      }
      cb(burgers);
      // console.log("result in orm", burgers);
    });
  },

  // updating where id matches and if matches then we change the devoured
  //to true(1) and then this will change where it is displayed using handlebars
  update: (id, cb) => {
    connection.query(
      "UPDATE burgers SET devoured = true WHERE id=" + id + ";",
      function (err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
  //had an issue but now fixed where i was passing in the burger name as the 2nd parameter which shoudl have been the cb
  create: (name, cb) => {
    connection.query(
      "INSERT INTO burgers SET ?",
      {
        burger_name: name,
        devoured: false,
      },
      function (err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
  delete: (id, cb) => {
    connection.query(
      "DELETE FROM burgers WHERE id = ? ",
      id,
      console.log("im the id", id),
      function (err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
