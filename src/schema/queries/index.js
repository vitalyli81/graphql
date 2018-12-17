import { GraphQLObjectType } from "graphql";
import person from './person';
import film from './film';

const fields = {
  person,
  film,
};

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields
});

export default queryType;
