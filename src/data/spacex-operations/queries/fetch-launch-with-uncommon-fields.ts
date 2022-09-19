import { gql } from "@apollo/client";

export const FETCH_LAUNCH_UNCOMMON_FIELDS_QUERY = gql`
  query fetchLaunch {
    fetchLaunch @client {
      id
      launch_success
      is_tentative
    }
  }
`;
