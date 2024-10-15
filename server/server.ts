import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import {typeDefs, resolvers} from './schema';
// MongoDB connection
const MONGO_URI = "mongodb+srv://antonha016:ilovemongodb@cluster0.ow2zi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected');
  })
  .catch(async (err) => {
    console.error('MongoDB connection error:', err);
  });

// Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});