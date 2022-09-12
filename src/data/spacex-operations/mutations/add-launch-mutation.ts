import { gql } from "@apollo/client";

export const ADD_LAUNCH_MUTATION = gql`
  mutation addLaunch {
    addLaunch @client {
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
