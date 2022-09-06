import React from "react";
import { useApolloClient } from "@apollo/client";
import { ADD_LAUNCH_MUTATION } from "../../data/spacex-operations";

export const AddLaunch = () => {
  const client = useApolloClient();
  const onClick = React.useCallback(async () => {
    try {
      await client.mutate({ mutation: ADD_LAUNCH_MUTATION });
    } catch (error) {
      console.log(`fail to mutate add launch`, error);
    }
  }, [client]);

  return <button onClick={onClick}>{"Add Launch"}</button>;
  // return <></>;
};

// JackJill321;
