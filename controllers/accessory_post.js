const express = require("express");
const bodyParser = require("body-parser");
const Cube = require("../models/Cube");
const Accessory = require("../models/assessory");
const url = require("url");

module.exports = (req, res) => {
	const selectedAccessory = req.body.accessory;
	const cubeId = req.params.id;

	Cube.findById(cubeId, function (err, cube) {
		if (err) return console.error(err);
		// Get collection of existing accessories
		Accessory.find(function (err, accessories) {
			// Filter out the accessory doc associated with the chosen option
			let attachThisAccessory = accessories.filter(
				(accessory) => accessory.name == selectedAccessory
			)[0];
			if (!cube.accessory.includes(attachThisAccessory._id)) {
				cube.accessory.push(attachThisAccessory);
				cube.save(function (err) {
					if (err) return console.error(err);
					console.log(req);
					res.redirect(`/details/${cubeId}`);
				});
			} else {
				console.log("Accessory Already Attached to this Cube!");
				res.redirect(`/details/${cubeId}`);
			}
		});
	});
};
