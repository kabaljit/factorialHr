import cloneDeep from "lodash/cloneDeep";

import { tokens } from "@theme/tokens";
import { camelCaseToKebabCase } from "@lib/camelCaseToKebabCase";

type ResponsiveProps<T> = {
  [prop in keyof T]: T[prop];
};

export const replaceTokens = <T = unknown>(
  props: ResponsiveProps<T>
): string => {
  const clonedObject: any = cloneDeep(props);
  let finalString = "";

  for (const key of Object.keys(clonedObject)) {
    const value = (props as any)[key];

    if (typeof value === "string") {
      const build = `${key}: ${value};`;

      finalString += build;
    }

    if (
      ["string", "number"].includes(typeof value) &&
      tokens.sizes[value as keyof typeof tokens.sizes]
    ) {
      clonedObject[key] = tokens.sizes[value as keyof typeof tokens.sizes];
      const build = `${key}: ${
        tokens.sizes[value as keyof typeof tokens.sizes]
      };`;

      finalString += build;
    }
  }

  return camelCaseToKebabCase(finalString);
};
