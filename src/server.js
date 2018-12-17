import express from 'express';
import graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import dotenv from 'dotenv';

dotenv.config();

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    user: {
      type: GraphQLString
    },
    greetings: {
      type: GraphQLString
    },
  }
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    myUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (_, { name }) => {
        return {
          user: name,
          greetings: `hello ${name}`
        }
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType,
})

const app = express();

const logger = (req, resp, next) => {
  console.log('LOGGER IP ', req.ip);
  next();
}

app.use(logger);

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true

}))

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
