import { render, screen } from '@testing-library/angular';
import { NotFoundComponent } from './not-found.component';

async function setup(supportEmail: string | null = 'support@example.com') {
  const { fixture } = await render(NotFoundComponent, {
    componentInputs: { supportEmail },
  });
  const component = fixture.componentInstance;
  return component;
}

describe('NotFoundComponent', () => {
  it('should render the not found message', async () => {
    await setup();

    // Match text across line breaks and whitespace
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /This page isn't available/i,
    );
  });

  it('should display the support email', async () => {
    await setup();

    expect(screen.getByText('support@example.com')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'support@example.com' })).toHaveAttribute(
      'href',
      'mailto:support@example.com',
    );
  });
});
