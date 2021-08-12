const env = process.env.NODE_ENV || "development";
const exphbs = require("express-handlebars");
const config = require("./config/config")[env];
const app = require("express")();
const path = require("path");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
require("./config/express")(app);
require("./config/routes")(app);

// Mongo DB Connection
mongoose
	.connect(
		`mongodb+srv://${process.env.dataName}:${process.env.DataBasePass}@cluster0.0a1tu.mongodb.net/Ninja?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then((res) => console.log("db connected"))
	.catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("we are conected yall");
});

app.listen(
	config.port,
	console.log(`Listening on port ${config.port}! Now its up to you...`)
);
