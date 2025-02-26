import { LoadingSpinner } from "@/components/atoms/LoadingSpinner/LoadingSpinner";
import { Suspense } from "react";

export const withSuspense = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => (
    <Suspense fallback={<LoadingSpinner />}>
      <Component {...props} />
    </Suspense>
  );
};
