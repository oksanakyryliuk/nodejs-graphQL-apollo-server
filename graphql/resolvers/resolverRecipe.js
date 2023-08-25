const Recipe = require('../models/recipe')

const resolversRecipe= {
    Query: {
        async recipe(_, { ID }) {
            return await Recipe.findById(ID)
        },
        async getRecipes(_, { amount }) {
            return await Recipe.find().sort({ createdAt: -1 }).limit(amount)
        },
    },
    Mutation: {
        async createRecipe(_, { recipeInput: { name, description } }) {
            const createdRecipe = new Recipe({
                name: name,
                description: description,
                createdAt: new Date().toISOString(),
                trumbsUp: 0,
                trumbsDown: 0
            })
            const res = await createdRecipe.save();  //mongo saving
            return {
                id: res.id,
                ...res._doc
            }

        },
        async deleteRecipe(_, { ID }) {
            const wasDeleted = (await Recipe.deleteOne({ _id: ID })).deletedCount
            return wasDeleted

        },

        async editRecipe(_, { ID, recipeInput: { name, description } }) {
            const wasEdited = (await Recipe.updateOne({ _id: ID }, { name: name, description: description })).modifiedCount;
            return wasEdited;
        },
    }


}
module.exports=resolversRecipe