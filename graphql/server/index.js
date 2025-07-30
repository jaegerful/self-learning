import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/type-defs.js";
import resolvers from "./schema/resolvers.js";
const server = new ApolloServer({ typeDefs, resolvers, context: () => {
    {
        // provide properties to share across resolvers.
    }
}}); 
const {url} = await server.listen();
console.log(`we have launched at ${url}, san antonio 🚀!`);