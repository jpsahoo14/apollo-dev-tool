import * as React from "react";

interface IToggleRender {
  name?: string;
}

export const ToggleRender = (props: React.PropsWithChildren<IToggleRender>) => {
  const [shouldRender, setShouldRender] = React.useState(true);

  const { children, name } = props;

  const setToggleRenderCb = React.useCallback(() => {
    setShouldRender((toggleRender) => !toggleRender);
  }, [setShouldRender]);

  return (
    <>
      <button onClick={setToggleRenderCb}>{`Toggle ${name}`}</button>
      {shouldRender ? children : null}
    </>
  );
};
