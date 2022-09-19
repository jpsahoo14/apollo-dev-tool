import React from "react";
import { useApolloClient } from "@apollo/client";
import { FETCH_LAUNCH_QUERY } from "../../data/spacex-operations";

export const FetchLaunch = () => {
  const client = useApolloClient();
  const onClick = React.useCallback(async () => {
    try {
      const result = await client.query({
        query: FETCH_LAUNCH_QUERY,
        fetchPolicy: "network-only",
      });
      console.log({ first: result.data.fetchLaunch[0] });
    } catch (error) {
      console.log(`fail to query fetch launch`, error);
    }
  }, [client]);

  return <button onClick={onClick}>{"Fetch Launch"}</button>;
  // return <></>;
};

// JackJill321;
