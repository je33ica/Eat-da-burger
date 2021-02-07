// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burgers = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },

  // The variables cols and vals are arrays.
  create(name, cb) {
    orm.create(name, cb);
  },

  update(id, cb) {
    orm.update(id, cb);
  },
  delete(name, cb) {
    orm.delete(name, cb);
  },
};

// Export the database functions for the controller
module.exports = burgers;
