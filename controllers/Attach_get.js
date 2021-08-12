const express = require("express");
const bodyParser = require("body-parser");
const Cube = require("../models/Cube");
const Accessory = require("../models/assessory");
const url = require("url");

module.exports = (req, res) => {
	Cube.findById(req.params.id, function (err, cube) {
		if (err) return console.error(err);

		Accessory.find(function (err, accessories) {
			if (err) return console.error(err);
		}).then((response) => {
			res.render("attachAccessory", {
				cube,
				response,
			});
		});
	});
};
