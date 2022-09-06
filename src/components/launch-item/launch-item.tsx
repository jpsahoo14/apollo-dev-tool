import * as React from "react";

interface ILaunchItemProps {
  flight_number: number | null | undefined;
  launch_year: number | null | undefined;
  mission_name: string | null | undefined;
  tbd?: boolean | null | undefined;
}
export const LaunchItem = (props: ILaunchItemProps) => {
  const { flight_number, launch_year, mission_name, tbd } = props;

  return (
    <div>{`flight_number:${flight_number}: launch_year:${launch_year}:  tbd:${tbd}`}</div>
  );
};
