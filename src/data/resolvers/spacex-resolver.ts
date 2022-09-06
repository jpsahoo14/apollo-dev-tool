import { InMemoryCache } from "@apollo/client";
import {
  LaunchListDocument,
  Launch,
  LaunchListQuery,
  LaunchListWithExtraFieldsDocument,
  LaunchListWithExtraFieldsQuery,
} from "../../generated";
import produce from "immer";

export const resolvers = {
  Mutation: {
    addLaunch: (_, _1, { cache }: { cache: InMemoryCache }) => {
      return operateOnLaunchListDocument({ cache });
    },
  },
};

const operateOnLaunchListDocument = ({ cache }) => {
  const data: LaunchListQuery = cache.readQuery({
    query: LaunchListDocument,
  });

  const existingLaunch = {
    ...data.launches[23],
  };
  console.log({ existingLaunch });
  const newLaunch: Launch = {
    __typename: "Launch",
    flight_number: data.launches.length - 2,
    mission_name: "random",
    launch_year: 2010,
    mission_id: ["123"],
  };
  const nextState = produce(data, (draft) => {
    draft.launches.push(newLaunch);
  });

  // cache.writeQuery({ query: LaunchListDocument, data: nextState });
  return existingLaunch;
};

const operateOnLaunchListWithExtraFieldsDocument = ({ cache }) => {
  const data: LaunchListWithExtraFieldsQuery = cache.readQuery({
    query: LaunchListWithExtraFieldsDocument,
  });

  const newLaunch: Launch = {
    __typename: "Launch",
    flight_number: data.launches.length - 2,
    mission_name: "random",
    launch_year: 2010,
    mission_id: ["123"],
  };
  const nextState = produce(data.launches[5], (draft) => {
    draft.tbd = !draft.tbd;
  });

  console.log({ nextState });
  // cache.writeQuery({ query: LaunchListDocument, data: nextState });
  return nextState;
};
