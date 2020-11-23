const orm = require("../config/orm.js");

const food = {
    selectAll: function(cb) {
      orm.selectAll("foods", function(res) {
        cb(res);
      });
    },
    insertOne: function(cols, vals, cb) {
      orm.insertOne("foods", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(colVal, condition, cb) {
      orm.update("foods", colVal, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller
  module.exports = food;