import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import '@lib/i18n/config';

i18next.addResourceBundle('en-GB', 'SuperScreen', {
  title: 'SuperScreen',
});

export function useModuleTranslations() {
  return useTranslation('SuperScreen', { useSuspense: false });
}
