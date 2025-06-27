const mongoose = require('mongoose')


const RecipeSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description:{type: String},
    ingredients:{type: String },
    imageUrl: {type: String},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

const RecipeModel = mongoose.model("recipe", RecipeSchema)
module.exports = RecipeModel; 