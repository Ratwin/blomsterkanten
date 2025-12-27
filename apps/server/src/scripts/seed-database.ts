// import { reset, seed } from 'drizzle-seed';
// import { db } from '../index.ts';
// import * as schema from '../schema/index.ts';

// const main = async () => {
//   await reset(db, schema);

//   await seed(db, schema, { seed: 42 }).refine((f) => ({
//     dropzone: {
//       count: 50,
//       columns: {
//         id: f.uuid(),
//         name: f.companyName(),
//         description: f.loremIpsum({
//           sentencesCount: 4,
//         }),
//         createdAt: f.timestamp(),
//         updatedAt: f.timestamp(),
//         deletedAt: f.weightedRandom([
//           { weight: 0.8, value: f.default({ defaultValue: undefined }) },
//           { weight: 0.2, value: f.timestamp() },
//         ]),
//       },
//     },
//   }));
// };

// main();
