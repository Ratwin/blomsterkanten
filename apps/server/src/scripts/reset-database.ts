import { Pool } from 'pg';
import { Environment } from '../config/environment.ts';
import { Logger } from '../config/logger.ts';

const pool = new Pool({
  connectionString: Environment.DATABASE_URL,
});

const reset = async (): Promise<void> => {
  Logger.info(`Reset script started, resetting database...`);
  await pool.query(`DROP DATABASE IF EXISTS "${Environment.DATABASE_NAME}";`);
  await pool.query(`CREATE DATABASE "${Environment.DATABASE_NAME}";`);
  Logger.info(`Reset database "${Environment.DATABASE_NAME}" completed!`);
  Logger.info(
    `Apply drizzle migrations using: pnpm --filter orm migrate:apply`
  );
  await pool.end();
};

await reset();

process.exit(0);
