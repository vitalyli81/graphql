import {
  GraphQLObjectType,
  GraphQLString,
 } from "graphql";

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

export default UserType;
