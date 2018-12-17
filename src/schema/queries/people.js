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
    const { name, gender, films } = await findPeople(id);
    const filmList = await findDependencies(films);
    
    return {
      name,
      gender,
      films: filmList
    }
  }
};
