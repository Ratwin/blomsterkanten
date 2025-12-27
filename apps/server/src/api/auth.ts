import { createHonoApp } from '../app/hono/create-hono-app.ts';
import { auth } from '../lib/auth.ts';

const authentication = createHonoApp().on(['POST', 'GET'], '/api/auth/*', (c) =>
  auth.handler(c.req.raw)
);

export { authentication };
