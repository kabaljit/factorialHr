import { render } from '@test/utils';

import TextInput from './TextInput';

test('TextInput should render', () => {
  const { getByTestId } = render(
    <TextInput firstProp="a" secondProp="b">
      Hello
    </TextInput>,
  );

  const textInputNode = getByTestId('text-input');

  expect(textInputNode.props.children).toBe('Hello');
});

// TODO: Add your tests
