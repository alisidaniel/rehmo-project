const graphqlSchema = require('graphql');

module.exports = graphqlSchema(`
    type User {
        _id:ID!
        email:String!
        password:String!
        createdAt:String!
        updatedAt:String!
    }

    type RootQuery {

    }

    type RootMutation {

    }

    type RootSubcription {

    }

    schema {
        query:RootQuery
        mutation:RootMutation
        subcription:RootSubcription
    }
`);

