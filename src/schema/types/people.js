import {
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: 'PeopleType',
  fields: {
    name: { type: GraphQLString },
    gender: { type: GraphQLString }
  }
});
