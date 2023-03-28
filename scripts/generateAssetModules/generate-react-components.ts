import * as path from "path";
import { promises as fs } from "fs";
import { transform } from "@svgr/core";
import { camelCase, upperFirst } from "lodash";
import { ensureDir } from "fs-extra";

const INPUT_DIR = "assets/";
const OUTPUT_DIR = "src/data";

const componentGenerationInfo = [
  {
    prefix: "icon",
    source: path.join(INPUT_DIR, "svg"),
  },
];
// TODO: Improve svg support, in the meantime use PNG
export const generateReactComponents = async () => {
  console.log("Generating component modules...");
  const exportLines = await Promise.all(
    componentGenerationInfo.map(async (info) => {
      const entries = await fs.readdir(info.source, { withFileTypes: true });
      const fileNames = entries
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name);

      return Promise.all(
        fileNames.map(async (fileName) => {
          const name = camelCase(
            `${info.prefix} ${fileName}`.replace(".svg", "")
          );
          const pascalName = upperFirst(name);

          const content = await fs.readFile(
            path.join(info.source, fileName),
            "utf8"
          );

          const code = await transform(
            content,
            {
              icon: false,
              typescript: true,
              native: true,
            },
            { componentName: pascalName }
          );
          // Ensure the output directory exists
          await ensureDir(`${OUTPUT_DIR}/components`);

          await fs.writeFile(`${OUTPUT_DIR}/components/${name}.tsx`, code);

          return `export { default as ${pascalName} } from "./components/${name}";`;
        })
      );
    })
  );

  const exportText = exportLines.map((lines) => lines.join("\n")).join("\n");

  const contents = `/*
THIS IS A GENERATED FILE.
*/

${exportText}
`;

  return fs.writeFile(`${OUTPUT_DIR}/mobile.ts`, contents);
};
