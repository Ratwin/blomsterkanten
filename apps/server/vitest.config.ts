import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          include: ['**/*.e2e.test.ts'],
          name: 'e2e',
        },
      },
      {
        test: {
          include: ['**/*.unit.test.ts'],
          name: 'unit',
        },
      },
    ],
  },
});
