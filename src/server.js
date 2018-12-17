import express from 'express';
import graphqlHTTP from 'express-graphql';
import graphql from 'graphql';

const { SWAPI_BASE } = process.env;

console.log(SWAPI_BASE);

const app = express();

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');