import { GraphQLString } from "graphql";
import PeopleType from "../types/people";
import { findPeople } from '../../store/people';
import { findDependencies } from '../../utils'

export default {
  type: PeopleType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }) => {
    const result = await findPeople(id);
    const films = await findDependencies(result.films);
    
    return {
      ...result,
      films
    }
  }
};
