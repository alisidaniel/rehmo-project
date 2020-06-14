require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const { mongo_db, mongo_user, mongo_password} = require('./config/config');


const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
    schema: '',
    rootValue: '',
    graphiql: true
  
  }));

mongoose.connect(
    `mongodb+srv://${mongo_user}:${mongo_password}@cluster0-n4wcr.mongodb.net/${mongo_db}?retryWrites=true&w=majority`
    ).then(() =>{
      app.listen(port, () => {
        console.log(`Running on port ${port}`);
      });
      
    }).catch(err =>{
      console.log(err);
    });