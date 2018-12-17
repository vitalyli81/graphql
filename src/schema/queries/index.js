import { GraphQLObjectType } from "graphql";
import people from './people';

const fields = {
  people
};

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields
});

export default queryType;
