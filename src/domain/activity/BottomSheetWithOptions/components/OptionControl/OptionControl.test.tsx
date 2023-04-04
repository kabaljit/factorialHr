import { render } from '@test/utils';

import OptionControl from './OptionControl';

test('OptionControl should render', () => {
  const { getByTestId } = render(<OptionControl firstProp="a" secondProp="b">Hello</OptionControl>);

  const optionControlNode = getByTestId('option-control');

  expect(optionControlNode.props.children).toBe('Hello');
});

// TODO: Add your tests
