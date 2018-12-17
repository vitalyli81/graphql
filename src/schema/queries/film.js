import { GraphQLString } from "graphql";
import FilmType from "../types/film";
import { findFilm } from '../../store/film';

export default {
  type: FilmType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }) => {
    const {
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date
    } = await findFilm(id);
    
    return {
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date
    }
  }
};
