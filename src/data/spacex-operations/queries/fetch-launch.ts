import { gql } from "@apollo/client";

export const FETCH_LAUNCH_QUERY = gql`
  query fetchLaunch {
    fetchLaunch @client {
      id
      details
      mission_id
      mission_name
      launch_year
    }
  }
`;
