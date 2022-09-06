import { gql } from "@apollo/client";

export const QUERY_LAUNCH_LIST = gql`
  query LaunchListWithExtraFields {
    launches {
      flight_number
      mission_name
      launch_year
      mission_id
      details
      tbd
      upcoming
    }
  }
`;
