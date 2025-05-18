import type { MetaFunction as RemixMetaFunction } from "react-router";

export namespace Route {
  export type MetaFunction = RemixMetaFunction;

  export interface LoaderArgs {
    request: Request;
    params: Record<string, string>;
  }

  export interface ActionArgs {
    request: Request;
    params: Record<string, string>;
  }

  export interface ComponentProps {
    loaderData: any;
    actionData: any;
  }
}
