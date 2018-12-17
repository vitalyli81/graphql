import { GraphQLString } from "graphql";
import UserType from "../types/user";

const myUser = {
  type: UserType,
  args: {
    name: { type: GraphQLString }
  },
  resolve: (_, { name }) => {
    return {
      user: name,
      greetings: `hello ${name}`
    }
  }
}

export default myUser;
