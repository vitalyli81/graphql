import express from 'express';
import graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

import schema from "./schema";


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
