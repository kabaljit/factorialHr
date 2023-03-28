import * as React from 'react';

import { render } from '@test/utils';
import { Button } from './Button';

const uid = 'button-test';

test('Button Test', () => {
  const { getByTestId } = render(<Button name="test" title="Hello" />);

  const buttonNode = getByTestId(uid);

  expect(buttonNode).toEqual('Hello');
});

test('Button Loading Test', () => {
  const { getByTestId } = render(<Button name="test" busy title="Hello" />);

  const buttonNode = getByTestId(uid);

  expect(buttonNode).toEqual('');
});
