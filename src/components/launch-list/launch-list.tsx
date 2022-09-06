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
  const comp = slicedArray?.map((item, index) => (
    <LaunchItem
      flight_number={item?.flight_number}
      launch_year={item?.launch_year}
      mission_name={item?.mission_name}
      tbd={item?.tbd}
      key={index}
    />
  ));

  return <>{comp}</>;
}
