import { type ZodType, z } from 'zod/v4';
import type { ResourceType } from '../tags.ts';

/**
 * Creates a Zod schema for JSON content.
 * @param schema The Zod schema representing the JSON content.
 * @returns A schema object for JSON mime type.
 */
export const json = <T extends ZodType>(schema: T) => {
  return {
    'application/json': {
      schema: schema,
      description: 'JSON content response',
    },
  };
};

/**
 * Creates a Zod schema for problem details content.
 * @returns A Zod schema for problem details content.
 */
export const problem = (resource: ResourceType) => {
  return {
    'application/problem+json': {
      schema: z.object({
        title: z.string().openapi({
          description: 'A short, human-readable summary of the problem ',
        }),
        detail: z.string().optional().openapi({
          description:
            'A human-readable explanation specific to this occurrence of the problem',
        }),
      }),
      description: `Problem details related to the ${resource} resource.`,
    },
  };
};
