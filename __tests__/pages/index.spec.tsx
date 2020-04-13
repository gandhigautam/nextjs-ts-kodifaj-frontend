import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages';
import { Task } from '../../models/task.types';

test('renders deploy link', () => {
  const { getByText } = render(<Home tasks={[{ id: 'foo-id' } as Task]} />);
  const linkElement = getByText('foo-id');
  expect(linkElement).toBeInTheDocument();
});
