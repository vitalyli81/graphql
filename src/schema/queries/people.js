import { GraphQLString } from "graphql";
import PeopleType from "../types/people";
import find from '../../store/user';

export default {
  type: PeopleType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }) => {
    const { name } = await find(id);
    
    return {
      user: name,
    }
  }
};

