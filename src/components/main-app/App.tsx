import "./App.css";
import { LaunchList } from "../launch-list";
import { ApolloDevTool } from "../apollo-dev-tool";
import { useApolloClient } from "@apollo/client";
import { ToggleRender } from "../toggle-render";
import * as React from "react";
import { AddLaunch } from "../add-launch";
import { EmptyDiv } from "../empty-div";
import {
  useLaunchListQuery,
  useLaunchListWithExtraFieldsQuery,
} from "../../generated/graphql";
import { FetchLaunch, FetchLaunchUncommonFields } from "../fetch-launch";

const App = () => {
  const client = useApolloClient();

  return (
    <>
      <ToggleRender name={"launch list"}>
        <LaunchList name={"launch list"} query={useLaunchListQuery} />
      </ToggleRender>
      <EmptyDiv />
      <ToggleRender name={"launch list with extra fields"}>
        <LaunchList
          name={"launch list-2"}
          query={useLaunchListWithExtraFieldsQuery}
        />
      </ToggleRender>
      <EmptyDiv />

      <AddLaunch />
      <FetchLaunch />
      <FetchLaunchUncommonFields />
      <ApolloDevTool client={client} />
    </>
  );
};

export default App;

// JackJill321;
