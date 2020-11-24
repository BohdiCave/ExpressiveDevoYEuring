// Importing express.js and the model
const express = require("express");
const food = require("../models/food.js");
let hbsObject = {};

// Setting up API routes
const router = express.Router();

router.get("/", (req, res) => {
  food.selectAll(data => {
    hbsObject = {
      foods: data
    };
    res.render("index", hbsObject);
  });
});
  
router.post("/api/foods", (req, res) => {
  food.insertOne(["food_name", "ingredients", "pic_url", "devo_ye_ured"], 
  [req.body.food_name, req.body.ingredients, req.body.pic_url, req.body.devo_ye_ured], 
  result => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      food.selectAll(data => {
        hbsObject = {
          foods: data
        };
        res.render("index", hbsObject);     
      });
    }
  });
});
  
router.put("/api/foods/:id", (req, res) => {
  const id = req.params.id;
  food.updateOne(req.body.devo_ye_ured, id, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Exporting the routes for the server
module.exports = router;