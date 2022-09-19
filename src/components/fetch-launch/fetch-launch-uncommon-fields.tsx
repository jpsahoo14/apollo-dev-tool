import React from "react";
import { useApolloClient } from "@apollo/client";
import { FETCH_LAUNCH_UNCOMMON_FIELDS_QUERY } from "../../data/spacex-operations";

export const FetchLaunchUncommonFields = () => {
  const client = useApolloClient();
  const onClick = React.useCallback(async () => {
    try {
      const result = await client.query({
        query: FETCH_LAUNCH_UNCOMMON_FIELDS_QUERY,
        fetchPolicy: "network-only",
      });
      console.log({ first: result.data.fetchLaunch[0] });
    } catch (error) {
      console.log(`fail to query FetchLaunchUncommonFields launch`, error);
    }
  }, [client]);

  return <button onClick={onClick}>{"Fetch Launch uncommon fields"}</button>;
  // return <></>;
};

// JackJill321;
