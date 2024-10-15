import { gql } from 'apollo-server';
import User, { IUser } from './models/User';
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!): User
  }

`;
export const resolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }): Promise<IUser | null> => {
      return await User.findById(id);
    },
    getUsers: async (): Promise<IUser[]> => {
      return await User.find({});
    },
  },
  Mutation: {
    addUser: async (_: any, { name, email }: { name: string; email: string }): Promise<IUser> => {
      const newUser = new User({ name, email });
      return await newUser.save();
    },
  },
};