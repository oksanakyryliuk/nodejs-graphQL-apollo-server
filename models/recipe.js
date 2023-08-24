const {model, Schema}=require('mongoose');

const recipeSchema = new Schema({
name: String,
description: String,
createAt: String,
trumbsUp: Number,
trumbsDown: Number
})

module.exports=model('Recipe', recipeSchema)