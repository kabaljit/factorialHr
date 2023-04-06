import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import '@lib/i18n/config';

i18next.addResourceBundle('en-GB', 'DateSlider', {
  title: 'DateSlider',
});

export function useModuleTranslations() {
  return useTranslation('DateSlider', { useSuspense: false });
}
