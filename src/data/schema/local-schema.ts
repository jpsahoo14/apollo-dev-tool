import { gql } from "@apollo/client";

export const QUERY_LAUNCH_LIST = gql`
  extend type Mutation {
    addLaunch: Launch
  }
`;
