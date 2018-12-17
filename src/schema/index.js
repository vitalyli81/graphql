import { GraphQLSchema } from 'graphql';
import queryType from './queries';

const schema = new GraphQLSchema({
  query: queryType,
});

export default schema;
