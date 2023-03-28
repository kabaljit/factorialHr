export const camelCaseToKebabCase = (string: string) =>
  string.replace(
    /([a-z])([A-Z])/g,
    (_, p1: string, p2: string) => `${p1}-${p2.toLowerCase()}`
  );
