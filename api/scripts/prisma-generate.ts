import * as util from 'util';
import * as child_process from 'child_process';

const exec = util.promisify(child_process.exec);

export default async function startDB() {
  try {
    console.log('Running prisma generate');
    await exec('yarn run prisma:generate');

    console.log('Running prisma migrate');
    await exec('yarn run prisma:migrate');
  } catch (error) {
    console.log(error);
  }

  console.log('Database ready');
}
