import { useTheme } from "styled-components";

export type ThemeName = "factorial-light" | "factorial-dark";

export type ThemeMap<ThemeDef> = Record<ThemeName, ThemeDef>;

export function useComponentTheme<ThemeDef>(
  themes: ThemeMap<ThemeDef>
): ThemeDef {
  return themes[useTheme().currentTheme];
}
