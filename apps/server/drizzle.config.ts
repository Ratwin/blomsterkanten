import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { Environment } from './src/config/environment';

export default defineConfig({
  out: './migrations',
  schema: './src/database/schema',
  dialect: 'postgresql',
  casing: 'snake_case',
  dbCredentials: {
    url: `${Environment.DATABASE_URL}/${Environment.DATABASE_NAME}`,
  },
  migrations: {
    prefix: 'timestamp',
  },
});
