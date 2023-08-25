const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const MONGODB = "mongodb://localhost:27017/graph"

//Apollo 
const typeDefsRecipe = require('./graphql/typeDefs/typeDefsRecipe')
const resolvers = require('./graphql/resolvers/app-main-resolvers')

const server = new ApolloServer({
    typeDefs: [typeDefsRecipe],
    resolvers
})

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('mongo connection successful');
        return server.listen({ port: 5000 })
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })