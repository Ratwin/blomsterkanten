import type { RouteConfig, RouteHandler } from '@hono/zod-openapi';
import type { Handler } from 'hono';

// export type AppBindings = {
//   // biome-ignore lint/complexity/noBannedTypes: More might be added here
//   Variables: {
//     // various middleware options
//   };
// };
// export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindings>;

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R>;

export type Endpoint = {
  route: RouteConfig;
  handler: Handler;
  // biome-ignore lint/complexity/noBannedTypes: middleware might be added here later
  middleware?: {};
};
