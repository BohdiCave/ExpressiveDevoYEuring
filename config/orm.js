const connection = require("./connection.js");

const orm = {
  selectAll: function() {
    const queryString = "SELECT * FROM foods;";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(name, ingredients, pic, status) {
    const queryString = "INSERT INTO foods (food_name, ingredients, pic_url, devo_ye_ured) VALUES (?,?,?,?);";
    console.log(queryString);
    connection.query(queryString, [name, ingredients, pic, status], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(status, id) {
    var queryString =
      "UPDATE foods SET ? WHERE ?;";
    connection.query(queryString, [status, id], function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
