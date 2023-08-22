import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyButton } from 'vitest-link-reproduction';

test('renders a button', () => {
  render(<MyButton>Test</MyButton>);

  expect(screen.getByText('Test')).toBeDefined();
});
