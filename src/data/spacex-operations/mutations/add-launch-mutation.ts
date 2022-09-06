import { gql } from "@apollo/client";

export const ADD_LAUNCH_MUTATION = gql`
  mutation addLaunch {
    addLaunch @client {
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
