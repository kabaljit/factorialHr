import * as fse from 'fs-extra';
import * as prettier from 'prettier';

import moduleHeader from './moduleHeader';

export interface AssetSection {
  assets: Asset[];
  name: string;
}

export interface Asset {
  name: string;
  path: string;
}

export default async function writeModule(assetSections: AssetSection[], outPath: string) {
  const assetLines = assetSections.reduce<string[]>((lines, assetSection) => {
    if (assetSection.assets.length === 0) return lines;

    // Push section header
    lines.push(`// ${assetSection.name}`);

    // Push section assets
    for (const asset of assetSection.assets) {
      lines.push(`'${asset.name}': require('${asset.path}'),`);
    }

    return lines;
  }, []);

  const moduleText = `${moduleHeader}
export default {
  ${assetLines.join('\n')}
};
`;

  // Write module
  const formattedModuleText = prettier.format(moduleText, {
    filepath: outPath,
    ...prettier.resolveConfig.sync(outPath),
  });
  await fse.writeFile(outPath, formattedModuleText);
}
