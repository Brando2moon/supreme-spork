const mongoose = require("mongoose");
const Accessory = "./Accessory";
const Schema = mongoose.Schema;
const ninjaSchema = new mongoose.Schema({
	name: String,
	description: String,
	imageUrl: String,
	difficultyLevel: Number,
	accessory: [{ type: Schema.Types.ObjectId, ref: "Accessory" }],
});

const Cube = mongoose.model("Cube", ninjaSchema);

module.exports = Cube;
