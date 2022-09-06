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
const App = () => {
  const client = useApolloClient();

  return (
    <>
      <ToggleRender name={"launch list"}>
        <LaunchList name={"launch list"} query={useLaunchListQuery} />
      </ToggleRender>
      <EmptyDiv />
      <ToggleRender name={"launch list-2"}>
        <LaunchList name={"launch list-2"} query={useLaunchListQuery} />
      </ToggleRender>
      <EmptyDiv />

      <AddLaunch />
      <ApolloDevTool client={client} />
    </>
  );
};

export default App;

// JackJill321;
