const {model, Shema}=require('mongoose');

const recipeShema=new Shema({
name: String,
description: String,
createAt: String,
trumbsUp: Number,
trumbsDown: Number

})

module.exports=model('Recipe', recipeShema)