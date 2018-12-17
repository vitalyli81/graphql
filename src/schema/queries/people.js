import { GraphQLString } from "graphql";
import PeopleType from "../types/people";
import { findPeople } from '../../store/people';

export default {
  type: PeopleType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }) => {
    const { name, gender } = await findPeople(id);
    
    return {
      name,
      gender
    }
  }
};
