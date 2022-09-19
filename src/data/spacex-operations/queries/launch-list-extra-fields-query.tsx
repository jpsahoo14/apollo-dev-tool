import { gql } from "@apollo/client";

export const QUERY_LAUNCH_LIST_EXTRA_FIELDS = gql`
  query LaunchListWithExtraFields {
    launches {
      id
      details
      mission_id
      mission_name
      launch_year
      launch_success
      is_tentative
    }
  }
`;
