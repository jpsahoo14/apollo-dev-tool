import { InMemoryCache } from "@apollo/client";
import {
  LaunchListDocument,
  Launch,
  LaunchListQuery,
  LaunchListWithExtraFieldsDocument,
  LaunchListWithExtraFieldsQuery,
} from "../../generated";
import produce from "immer";

const index = 0;
export const fetchLaunch = (_, _1, { cache }: { cache: InMemoryCache }) => {
  const data: LaunchListWithExtraFieldsQuery = cache.readQuery({
    query: LaunchListWithExtraFieldsDocument,
  });

  const nextState = produce(data, (draft) => {
    draft.launches[index].launch_year = `${
      parseInt(draft.launches[index].launch_year) + 1
    }`;
    draft.launches[index].launch_success =
      !draft.launches[index].launch_success;
  });

  // cache.writeQuery({ query: LaunchListDocument, data: nextState });
  return nextState.launches;
};
