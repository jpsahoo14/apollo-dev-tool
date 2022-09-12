import * as React from "react";

interface ILaunchItemProps {
  details: string | null | undefined;
  launch_year: string | null | undefined;
  mission_name: string | null | undefined;
  launch_success?: boolean | null | undefined;
  mission_id: string | null | undefined;
  is_tentative?: boolean | null | undefined;
  id: string;
}
export const LaunchItem = (props: ILaunchItemProps) => {
  const {
    mission_id,
    launch_year,
    mission_name,
    launch_success,
    is_tentative,
    id,
  } = props;

  return (
    <div>{`id:${id}  launch_year:${launch_year}:  launch_success:${launch_success}`}</div>
  );
};
