const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config();
const db = process.env.MONGO_URI
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));
app.use('/graphql', graphqlHTTP({
    // can be written schema:schema which means schema property equals to the schema we just created
    // but because the names are the same based on ES6 rules we can just write schema.
    schema,
    graphiql: true
}))






app.listen(5000, () => console.log('Server is running on port 5000'))