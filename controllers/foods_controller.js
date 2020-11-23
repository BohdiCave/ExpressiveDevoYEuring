// Importing express.js and the model
const express = require("express");
const food = require("../models/food.js");

// Setting up API routes
const router = express.Router();

router.get("/", (req, res) => {
  food.selectAll(data => {
    const hbsObject = {
      foods: data
    };
    res.render("index", hbsObject);
  });
});
  
router.post("/api/foods", (req, res) => {
  food.insertOne(["food_name", "ingredients", "pic_url", "devo_ye_ured"], 
  [req.body.name, req.body.ingredients, req.body.pic, req.body.status], 
  result => {
    res.json({ id: result.insertId });
  });
});
  
router.put("/api/foods/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  food.updateOne(req.body.devo_ye_ured, condition, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Exporting the routes for the server
module.exports = router;