import { drizzle } from 'drizzle-orm/node-postgres';
import { Environment } from '../config/environment.ts';

/**
 * Database Connection
 */
export const db = drizzle({
  connection: `${Environment.DATABASE_URL}/${Environment.DATABASE_NAME}`,
  casing: 'snake_case',
});
