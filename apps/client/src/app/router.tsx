import { createRootRoute, createRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Router = createRouter({
  routeTree: createRootRoute({
    component: () => (
      <>
        <div>Hello</div>
        <TanStackRouterDevtools />
      </>
    ),
  }).addChildren([]),
});
