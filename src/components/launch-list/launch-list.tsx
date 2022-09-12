import React from "react";
import { LaunchItem } from "../launch-item";
import { useQuery } from "@apollo/client";

interface ILaunchListProps {
  name?: string;
  query: any;
}
export function LaunchList(props: ILaunchListProps) {
  const { name, query } = props;
  const { data, loading, error } = query();

  const slicedArray = React.useMemo(() => data?.launches?.slice(0, 10), [data]);

  React.useMemo(() => {
    console.log(`Re-rendering LaunchList:${name}`);
  }, [data, name]);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }
  const comp = slicedArray?.map((item, index) => {
    const {
      id,
      details,
      mission_id,
      mission_name,
      launch_year,
      launch_success,
      is_tentative,
    } = item;

    return (
      <LaunchItem
        launch_year={launch_year}
        mission_name={mission_name}
        key={id}
        details={details}
        mission_id={mission_id}
        launch_success={launch_success}
        is_tentative={is_tentative}
        id={id}
      />
    );
  });

  return <>{comp}</>;
}
