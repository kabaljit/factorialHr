import get from "lodash/get";
import cloneDeep from "lodash/cloneDeep";

import { ThemeName } from "./theme";

export type Theme<T> = { [key in ThemeName]: T };

type StyledProps = {
  theme: {
    currentTheme: string;
  };
};

const createComponentThemeInner = <T>(
  themeDefinitions: Theme<T>,
  currentItem: Record<string, any>,
  path: string[]
) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(currentItem)) {
    if (typeof currentItem[key] === "string") {
      currentItem[key] = (props: StyledProps) =>
        get(themeDefinitions[props.theme.currentTheme as ThemeName], [
          ...path,
          key,
        ]) as string;
    } else {
      createComponentThemeInner(
        themeDefinitions,
        currentItem[key] as Record<string, any>,
        [...path, key]
      );
    }
  }
};

export const createComponentTheme = <T>(themeDefinitions: Theme<T>) => {
  const result = cloneDeep(themeDefinitions["factorial-light"]);
  createComponentThemeInner(themeDefinitions, result, []);
  return result;
};
