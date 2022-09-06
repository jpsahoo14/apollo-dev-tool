import { ApolloCache, ApolloClient, InMemoryCache } from "@apollo/client";
import { resolvers } from "../resolvers";
import { typePolicies } from "./type-policies";

export const createApolloClient = () => {
  const inMemoryCache = new InMemoryCache({ typePolicies });

  const apolloClient = new ApolloClient({
    cache: inMemoryCache,
    uri: "https://spacexdata.herokuapp.com/graphql",
    resolvers,
  });

  return apolloClient;
};
