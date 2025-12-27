import 'dotenv';
import 'dotenv/config';
import { z } from 'zod';
import { Logger } from './logger.ts';

const EnvironmentSchema = z.object({
  PORT: z.preprocess((x) => (x ? x : undefined), z.coerce.number().int()),
  DATABASE_URL: z.string(),
  DATABASE_NAME: z.string(),
});

const { data, error } = EnvironmentSchema.safeParse(process.env);

if (error) {
  const pretty = z.prettifyError(error);

  Logger.error(`Environment variable validation failed: \n${pretty}`);

  throw new Error('Invalid environment variables');
}

export const Environment = data as z.infer<typeof EnvironmentSchema>;
