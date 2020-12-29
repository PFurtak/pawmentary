import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Review {
    id: ID!
    user: String!
    product_or_service: String!
    title: String!
    url: String
    review: String!
    rating: Int!
  }

  type Query {
    reviews: [Review!]!
  }

  type Mutation {
    deleteReview(id: ID!): Review!
  }
`;
