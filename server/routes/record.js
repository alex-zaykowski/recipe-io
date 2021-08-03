const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");

/* Function to find all records (from mern code excerpt)
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
*/

// create record
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("recipes");
  let recipe = {
    recipe_title: req.body.recipe_title,

  };
  db_connect.collection("recipes").insertOne(recipe, function (err, res) {
    if (err) throw err;
  });
});

// create user
recordRoutes.route("/record/create-account").post(function (req, res) {
  let db_connect = dbo.getDb("users");
  let recipe = {
    username: req.body.username,
    password: req.body.password,
  };
  db_connect.collection("users").insertOne(recipe, function (err, res) {
    if (err) throw err;
  });
});


module.exports = recordRoutes;