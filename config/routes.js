const express = require("express");
const bodyParser = require("body-parser");
const Cube = require("../models/Cube");
const Accessory = require("../models/assessory");
const url = require("url");
const homePage = require("../controllers/index_get");
const aboutPage = require("../controllers/about_get");
const accessoryView = require("../controllers/accessory_get");
const attachView = require("../controllers/Attach_get");
const createAccessory = require("../controllers/Create_accessory");
const errorPage = require("../controllers/404");
const detailsPage = require("../controllers/details_get");
const createPost = require("../controllers/create_post");
const createGet = require("../controllers/create_Get");
const attachPost = require("../controllers/accessory_post");
module.exports = (app) => {
	app.get("/", homePage);
	app.get("/about", aboutPage);
	app.get("/create", createGet);
	app.post("/create", createPost);
	app.get("/details/:id", detailsPage);
	app.get("/create/accessory", accessoryView);
	app.post("/create/accessory", createAccessory);
	app.post("/attach/:id", attachPost);
	app.get("/attach/:id", attachView);
	app.get("*", errorPage);
};

// database code //
// module.exports = Cube;
//render //
// Cube.find(function (err, cubes) {
// 	if (err) return console.error(err);

// 	res.render("index", {cubes});
// });
