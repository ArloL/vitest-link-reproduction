import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyAvatar } from 'vitest-link-reproduction';

test('renders an avatar', () => {
  render(<MyAvatar>Test</MyAvatar>);

  expect(screen.getByText('Test')).toBeDefined();
});
