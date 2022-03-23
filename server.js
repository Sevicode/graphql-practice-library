const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const app = express()
app.use('/graphql', graphqlHTTP({
    // can be written schema:schema which means schema property equals to the schema we just created
    // but because the names are the same based on ES6 rules we can just write schema.
    schema
}))






app.listen(5000, () => console.log('Server is running on port 5000'))