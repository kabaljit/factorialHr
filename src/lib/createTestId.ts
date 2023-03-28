import kebabCase from 'lodash/kebabCase';

export type TestElementType =
  | 'button'
  | 'balance-item'
  | 'card-list-item'
  | 'cards'
  | 'checkbox'
  | 'combo-search-box'
  | 'create-quick-action'
  | 'dropdown-button'
  | 'error-state-view'
  | 'icon'
  | 'input-container'
  | 'input'
  | 'label'
  | 'link'
  | 'list-item'
  | 'list'
  | 'loading'
  | 'logo'
  | 'message-box'
  | 'navigation-button'
  | 'radio-button'
  | 'rounded-button'
  | 'tab'
  | 'template'
  | 'toggle';

export const createTestId = (type: TestElementType, name: string) => `${type}-${kebabCase(name)}`;
