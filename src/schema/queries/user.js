import { GraphQLString } from "graphql";
import UserType from "../types/user";
import find from '../../store/user';

const myUser = {
  type: UserType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }) => {
    const { name } = await find(id);
    
    return {
      user: name,
      greetings: `hello ${name}`
    }
  }
}

export default myUser;
