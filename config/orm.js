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


//    create: (table, val, cb) => {
//     connection.query(`INSERT INTO ${table}` + "(burger_name) VALUES ('" + val + "');",
       
//     (err, res) => {
//             if (err) {
//                 throw err;
//             }
//             cb(res);
//         })
//    }
    
    // create(){

    // };
    // update(){


        update: function (id, cb) {
            connection.query('UPDATE burgers SET devoured = true WHERE id=' + id + ';', function (err, result) {
              if (err) throw err;
              cb(result);
            })
          },
    
};



module.exports = orm;

