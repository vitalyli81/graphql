import { GraphQLObjectType } from "graphql";
import myUser from './user';

const fields = {
  myUser
};

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields
});

export default queryType;
