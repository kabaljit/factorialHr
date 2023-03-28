import { render } from '@test/utils';
import NavigationButton from './NavigationButton';

describe('Navigation Button', () => {
  test('Back button', async () => {
    const buttonLabel = 'retreat melons';
    const { getByTestId, queryByTestId } = render(
      <NavigationButton name="back" direction="back" label={buttonLabel} />,
    );

    const navigationBackButton = getByTestId('navigation-button-back');

    expect(navigationBackButton).toBeVisible();
    expect(navigationBackButton).toHaveTextContent(buttonLabel);
    expect(getByTestId('navigation-button-back-chevron-left')).toBeVisible();
    expect(queryByTestId('navigation-button-back-chevron-right')).not.toBeInTheDocument();
  });
  test('Forward button', async () => {
    const buttonLabel = 'onwards melons';
    const { getByTestId, queryByTestId } = render(
      <NavigationButton name="forward" direction="forward" label={buttonLabel} />,
    );

    const navigationForwardButton = getByTestId('navigation-button-forward');

    expect(navigationForwardButton).toBeVisible();
    expect(navigationForwardButton).toHaveTextContent(buttonLabel);
    expect(getByTestId('navigation-button-forward-chevron-right')).toBeVisible();
    expect(queryByTestId('navigation-button-forward-chevron-left')).not.toBeInTheDocument();
  });
});
