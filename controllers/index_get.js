const express = require("express");
const bodyParser = require("body-parser");
const Cube = require("../models/Cube");
const Accessory = require("../models/assessory");
const route = require("../config/routes");

module.exports = (req, res) => {
	Cube.find(function (err, cubes) {
		if (err) return console.error(err);

		res.render("index", { cubes });
	});
};
