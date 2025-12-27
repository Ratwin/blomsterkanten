import { Scalar } from '@scalar/hono-api-reference';
import { authentication } from '../api/auth.ts';
import { createHonoApp } from './hono/create-hono-app.ts';

const app = createHonoApp().route('/', authentication);
// .route('/dropzone', dropzones);

// OpenAPI Documentation Setup
app.doc('/api/open-api', {
  openapi: '3.1.2',
  info: {
    title: 'Blomsterkanten API',
    version: '0.0.1',
    description:
      'API for managing resources related to the Blomsterkanten application',
  },
});

// Integration of Scalar API Reference UI
app.get(
  '/scalar',
  Scalar({
    pageTitle: 'Blomsterkanten API Reference',
    theme: 'deepSpace',
    sources: [
      {
        url: '/api/open-api',
        title: 'Blomsterkanten API',
      },
      {
        url: '/api/auth/open-api/generate-schema',
        title: 'Blomsterkanten Authentication API',
      },
    ],
  })
);

export { app };
