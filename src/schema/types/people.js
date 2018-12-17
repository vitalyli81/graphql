import {
  GraphQLObjectType,
  GraphQLString,
 } from "graphql";

 export default new GraphQLObjectType({
  name: 'PeopleType',
  fields: {
    user: {
      type: GraphQLString
    },
  }
});

