import { Suspense } from "react";

export const withSuspense = (WrapperComponent, fallback = <b>Loading...</b>) => {
  return (
    <Suspense fallback={fallback}>
      <WrapperComponent />
    </Suspense>
  );
};
