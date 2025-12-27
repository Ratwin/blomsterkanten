import { type ZodType, z } from 'zod/v4';
import type { ResourceType } from '../tags.ts';

/**
 * Creates a Zod schema for a paginated response.
 * @param schema The Zod schema representing the paginated items.
 * @param resource The resource type for description purposes.
 * @returns A Zod schema for a paginated response.
 */
export const paginated = <T extends ZodType>(
  schema: T,
  resource: ResourceType
) => {
  return z
    .object({
      data: z.array(schema).openapi({
        description: `An array of ${resource} items for the current page.`,
      }),
      metadata: z
        .object({
          totalCount: z
            .number()
            .int()
            .nonnegative()
            .openapi({
              description: `The total number of ${resource} items available.`,
            }),
          pageCount: z
            .number()
            .int()
            .positive()
            .openapi({
              description: `The total number of pages available for ${resource} items.`,
            }),
          page: z
            .number()
            .int()
            .positive()
            .openapi({
              description: `The current page number of ${resource} items.`,
            }),
          pageSize: z
            .number()
            .int()
            .positive()
            .openapi({
              description: `The number of ${resource} items per page.`,
            }),
        })
        .openapi({
          description: `Pagination metadata for ${resource} items.`,
        }),
    })
    .openapi({
      description: `A paginated response containing ${resource} items and pagination metadata.`,
    });
};
