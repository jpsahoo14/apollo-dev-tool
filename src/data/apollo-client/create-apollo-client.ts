import { ApolloCache, ApolloClient, InMemoryCache } from "@apollo/client";
import { resolvers } from "../resolvers";
import { typePolicies } from "./type-policies";

export const createApolloClient = () => {
  const inMemoryCache = new InMemoryCache();

  const apolloClient = new ApolloClient({
    cache: inMemoryCache,
    uri: "https://api.spacex.land/graphql/",
    resolvers,
  });

  return apolloClient;
};
