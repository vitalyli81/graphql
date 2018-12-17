import { GraphQLString } from "graphql";
import FilmType from "../types/film";
import { findFilm } from '../../store/film';

export default {
  type: FilmType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }) => {
    const films = await findFilm(id);
    
    return {
      ...films
    };
  }
};
