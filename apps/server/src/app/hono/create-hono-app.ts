import { OpenAPIHono } from '@hono/zod-openapi';
import { HttpStatusCode, HttpStatusPhrase } from '../../openapi/http/index.ts';
import { error } from '../../openapi/schemas/index.ts';

/**
 * Creates and returns a new instance of OpenAPIHono with default error handling.
 * This is useful for creating multiple Hono app instances with consistent error handling,
 * which is required when creating modular route handlers.
 * @returns {OpenAPIHono} A new OpenAPIHono instance with default error handling.
 */
export const createHonoApp = () => {
  const hono = new OpenAPIHono({
    strict: true,
    defaultHook: (res, c) => {
      if (!res) {
        return c.json(
          error(
            HttpStatusPhrase.INTERNAL_SERVER_ERROR,
            'An unexpected error occurred.'
          ),
          HttpStatusCode.INTERNAL_SERVER_ERROR
        );
      }

      if (!res.success) {
        const issues = res.error.issues.map((i) => i.message).join(', ');

        return c.json(
          error(
            HttpStatusPhrase.UNPROCESSABLE_ENTITY,
            `Unable to process request due to validation error(s): ${issues}`
          ),
          HttpStatusCode.UNPROCESSABLE_ENTITY
        );
      }

      return res;
    },
  });

  hono.notFound((c) =>
    c.json(
      error(HttpStatusPhrase.NOT_FOUND, 'Resource not found.'),
      HttpStatusCode.NOT_FOUND
    )
  );

  hono.onError((err, c) => {
    return c.json(
      error(HttpStatusPhrase.INTERNAL_SERVER_ERROR, err.message),
      HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  });

  return hono;
};
