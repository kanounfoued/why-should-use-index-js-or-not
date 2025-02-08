import { lazy } from "react";

export { default as Button } from "./button";
export { default as HomeHeader } from "./HomeHeader";

const HomeComplexComponent = lazy(() => import("./HomeComplexComponent"));
export { HomeComplexComponent };
