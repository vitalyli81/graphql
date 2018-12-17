import { GraphQLString } from "graphql";
import PesronType from "../types/person";
import { findPerson } from '../../store/pesron';

export default {
  type: PesronType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }) => {
    const people = await findPerson(id);
    
    return {
      ...people
    }
  }
};
