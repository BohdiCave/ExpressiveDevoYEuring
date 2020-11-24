// Importing database connection
const connection = require("./connection.js");

// Setting up database ORM functions
const orm = {
  selectAll: function(cb) {
    const queryString = "SELECT * FROM foods;";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(cols, vals, cb) {
    const queryString = "INSERT INTO foods (" + cols.toString() + ") VALUES (?,?,?,?)";
    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(status, id, cb) {
    var queryString = "UPDATE foods SET devo_ye_ured = ? WHERE id = ?;";
    connection.query(queryString, [status, id], function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

// Exporting DB ORM fx to the model
module.exports = orm;
