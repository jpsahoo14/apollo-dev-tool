import { InMemoryCache } from "@apollo/client";
import {
  LaunchListDocument,
  Launch,
  LaunchListQuery,
  LaunchListWithExtraFieldsDocument,
  LaunchListWithExtraFieldsQuery,
} from "../../generated";
import produce from "immer";
import { fetchLaunch } from "./spacex-queries";

const index = 0;

export const resolvers = {
  Query: { fetchLaunch },
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
    mission_name: "random",
    launch_year: "2010",
    mission_id: ["123"],
  };
  const nextState = produce(data, (draft) => {
    draft.launches[index].launch_year = `${
      parseInt(draft.launches[index].launch_year) + 1
    }`;
  });

  // cache.writeQuery({ query: LaunchListDocument, data: nextState });
  return nextState.launches[index];
};

const operateOnLaunchListWithExtraFieldsDocument = ({ cache }) => {
  const data: LaunchListWithExtraFieldsQuery = cache.readQuery({
    query: LaunchListWithExtraFieldsDocument,
  });

  const newLaunch: Launch = {
    __typename: "Launch",
    mission_name: "random",
    launch_year: "2010",
    mission_id: ["123"],
  };
  console.log({ prevState: data.launches[index] });

  const nextState = produce(data, (draft) => {
    draft.launches[index].launch_success =
      !draft.launches[index].launch_success;
  });

  console.log({ nextState: nextState.launches[index] });
  // cache.writeQuery({ query: LaunchListDocument, data: nextState });
  return nextState.launches[index];
};
