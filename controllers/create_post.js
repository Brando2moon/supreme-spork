const express = require("express");
const bodyParser = require("body-parser");
const Cube = require("../models/Cube");
const Accessory = require("../models/assessory");
const route = require("../config/routes");

module.exports = (req, res) => {
	const newCube = new Cube(req.body);

	console.log(newCube);
	newCube.save(function (err, fluffy) {
		if (err) return console.error(err);
		console.log("push cube");
	});
	res.redirect(302, "/");
};
