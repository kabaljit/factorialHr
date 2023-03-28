/* eslint-disable no-console  */
/* eslint-disable @typescript-eslint/no-implicit-any-catch */
import * as path from 'path';
import { generateReactComponents } from './generate-react-components';

import writeImagesModule from './writeImagesModule';
import writeRootModule from './writeRootModule';

const imagesPath = path.resolve('./assets/images');
const imagesModuleOutPath = path.resolve('./src/data/images');

const rootModuleOutPath = path.resolve('./src/data/');

async function run() {
  console.log('Generating asset modules...');
  try {
    await Promise.all([
      writeImagesModule(imagesPath, imagesModuleOutPath),
      writeRootModule(rootModuleOutPath, ['images']),
      generateReactComponents(),
    ]);
    console.log('Done!');
  } catch (error) {
    console.error(`Failed! ${error}`);
  }
}

run().catch((error) => console.error('Failed to generate asset modules.', error));
