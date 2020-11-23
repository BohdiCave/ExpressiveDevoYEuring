// Importing database ORM functions
const orm = require("../config/orm.js");

const food = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    insertOne: function(cols, vals, cb) {
      orm.insertOne(cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(status, id, cb) {
      orm.updateOne(status, id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the DB fx for the controller
  module.exports = food;