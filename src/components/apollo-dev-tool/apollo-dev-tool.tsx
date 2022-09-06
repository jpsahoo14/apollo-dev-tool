import * as React from "react";
import { ApolloClient } from "@apollo/client";

interface IApolloDevToolProps {
  client: ApolloClient<object>;
}

export const ApolloDevTool = (props: IApolloDevToolProps) => {
  const { client } = props;

  const startTracking = React.useCallback(() => {
    console.log({ client });
    const originalBroadcastQueries = (
      client as any
    ).queryManager.broadcastQueries.bind((client as any).queryManager);
    const fun = () => {
      console.log(`jps broadQueries called`);
      for (let [key, value] of (client as any).queryManager.queries) {
        //  console.log(key + " = " + value);
        //console.log({ value });
        console.log(`jps isDirty: ${value.dirty}`);
      }
      originalBroadcastQueries();
    };
    (client as any).queryManager.broadcastQueries = fun;
    console.log(`a`);
  }, [client]);

  React.useEffect(() => {});

  return (
    <>
      <button onClick={startTracking}>Start</button>
    </>
  );
};
