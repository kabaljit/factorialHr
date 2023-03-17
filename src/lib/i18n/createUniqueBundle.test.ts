import { renderHook } from '@testing-library/react-hooks';
import { createUniqueBundle } from './createUniqueBundle';

describe('createUniqueBundle', () => {
  test('create bundles that do not conflict with each oder', () => {
    const b1 = createUniqueBundle({ 'en-GB': { conflictingName: 'conflictingName.b1', different1: 'different.b1' } });
    const b2 = createUniqueBundle({ 'en-GB': { conflictingName: 'conflictingName.b2', different2: 'different.b2' } });

    const { result } = renderHook(() => {
      const { t: b1t } = b1.useBundleTranslations();
      const { t: b2t } = b2.useBundleTranslations();
      return {
        conflictingNameB1: b1t('conflictingName'),
        conflictingNameB2: b2t('conflictingName'),
        differentB1: b1t('different1'),
        differentB2: b2t('different2'),
      };
    });

    expect(result.current).toEqual({
      conflictingNameB1: 'conflictingName.b1',
      conflictingNameB2: 'conflictingName.b2',
      differentB1: 'different.b1',
      differentB2: 'different.b2',
    });
  });
});
