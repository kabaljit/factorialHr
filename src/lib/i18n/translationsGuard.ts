/**
 * This function does nothing to the passed object.
 * This is purely for type safety reasons.
 */
export function translationsGuard<TranslationsMap extends Record<string, unknown>>(translationsMap: TranslationsMap) {
  return translationsMap;
}
