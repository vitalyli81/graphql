import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from "graphql";
import FilmType from "./film";

export default new GraphQLObjectType({
  name: 'PeopleType',
  fields: {
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    films: {type: new GraphQLList(FilmType)}
  }
});
