import '@lib/i18n/config';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

let counter = 0;

export enum SupportedLanguage {
  EnGb = 'en-GB',
}

type ResourcesForLanguage<Resources> = Record<SupportedLanguage, Resources>;

/**
 * If we provide two bundles with the same namespace, they can overwrite each other.
 * This may lead to unexpected UI changes in case of two bundles having the same key.
 * This function attempts to mitigate that problem by generating names automatically.
 * This function gives no guarantee of real uniqueness if bundles are added directly
 * and not by using this function.
 */
export function createUniqueBundle<Resources>(resourcesMap: ResourcesForLanguage<Resources>) {
  // This is obviously a naive implementation, but I hope it will be good enough for our needs.
  const pseudoUniqueName = `bundle-${counter}`;
  counter += 1;

  for (const language of Object.values(SupportedLanguage)) {
    i18next.addResourceBundle(language, pseudoUniqueName, resourcesMap[language]);
  }

  return {
    useBundleTranslations,
  };

  function useBundleTranslations() {
    return useTranslation(pseudoUniqueName, { useSuspense: false });
  }
}
