import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from "graphql";

export default new GraphQLObjectType({
  name: 'FilmType',
  fields: {
    title: { type: GraphQLString },
    episode_id: { type: GraphQLString },
    director: { type: GraphQLString },
    producer: { type: GraphQLString },
    release_date: { type: GraphQLString },
    opening_crawl: { type: GraphQLString },
    url: { type: GraphQLString },
  }
});
