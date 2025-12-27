import { z } from '@hono/zod-openapi';
import type { ResourceType } from '../tags.ts';

/**
 * Creates a Zod schema for UUID path parameters.
 * @param resource The resource for which the UUID schema is being created.
 * @returns A Zod schema object for UUID path parameters.
 */
export const uuid = (resource: ResourceType) => {
  return z
    .object({
      uuid: z.uuidv4().openapi({
        description: `The UUID of the ${resource} resource.`,
      }),
    })
    .openapi({
      description: `Path parameters for identifying a specific ${resource} resource by its UUID.`,
    });
};

/**
 * Creates a Zod schema for pagination query parameters.
 * @param resource The resource for which the pagination schema is being created.
 * @returns A Zod schema object for pagination query parameters.
 */
export const pagination = (resource: ResourceType) => {
  return z
    .object({
      page: z.coerce
        .number()
        .int()
        .positive()
        .max(100)
        .default(1)
        .openapi({
          description: `The page number for paginating through ${resource} resources.`,
        }),
      pageSize: z.coerce
        .number()
        .int()
        .positive()
        .max(100)
        .default(10)
        .openapi({
          description: `The number of ${resource} resources to return per page.`,
        }),
    })
    .openapi({
      description: `Pagination parameters for querying ${resource} resources.`,
    });
};
