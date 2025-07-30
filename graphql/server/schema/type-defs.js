import {gql} from 'apollo-server';

// define schema for our GraphQL endpoint.

export default gql`
  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
  
  enum Hobby {
    FOOTBALL
    BASKETBALL
    TENNIS
    SWIMMING
    READING
  }

  type User {
    id: ID!
    name: String!
    age: Int
    nationality: Nationality
    friends: [User!]
    hobby: Hobby!
  }
  
  type Query {
    users: [User!]
    user(id: ID!): User
  }

  input CreateUserInput {
    name: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
  }
`;

// "input" defines structures that will be sent from the client to the server.
// "type" defines structures that will be sent from the server to the client!

// only "input" structures can have default values.

// queries and mutations are simply interfaces that our resolvers are responsible for implementing.