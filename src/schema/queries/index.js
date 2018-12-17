import { GraphQLObjectType } from "graphql";
import people from './people';
import film from './film';

const fields = {
  people,
  film,
};

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields
});

export default queryType;
