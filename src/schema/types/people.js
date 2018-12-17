import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from "graphql";
import FilmType from "./film";
import { findDependencies } from '../../utils'

export default new GraphQLObjectType({
  name: 'PeopleType',
  fields: {
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    height: { type: GraphQLString },
    mass: { type: GraphQLString },
    hair_color: { type: GraphQLString },
    skin_color: { type: GraphQLString },
    eye_color: { type: GraphQLString },
    birth_year: { type: GraphQLString },
    homeworld: { type: GraphQLString },
    url: { type: GraphQLString },
    films: { type: new GraphQLList(GraphQLString) },
    filmList: {
      type: new GraphQLList(FilmType),
      resolve: async (data) => {
        const result = await findDependencies(data.films);

        return result;
      }
    }
  }
});
