import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Profile from './profile';

describe('Profile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrowserRouter><Profile /> </BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });
});
