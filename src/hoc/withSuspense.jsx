import { Suspense } from "react";
import Loader from "../components/Loader";

export const withSuspense = (WrapperComponent, fallback = <Loader />) => {
  return (
    <Suspense fallback={fallback}>
      <WrapperComponent />
    </Suspense>
  );
};
