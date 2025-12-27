import type { AddressInfo } from 'node:net';
import { serve } from '@hono/node-server';
import { app } from './app/app.ts';
import { Environment } from './config/environment.ts';
import { Logger } from './config/logger.ts';

const onServerStart = (info: AddressInfo) => {
  Logger.info(`Server started at:  ${info.address}:${info.port}`);
};

const server = serve(
  {
    fetch: app.fetch,
    port: Environment.PORT,
  },
  onServerStart
);

const onServerShutdown = async () => {
  await server.close(() => Logger.info('Server has been shut down'));
};

// Gracefully shut down the server
process.on('SIGINT', onServerShutdown);
process.on('SIGTERM', onServerShutdown);
