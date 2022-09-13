import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PtgUiLogin from './Login';
jest.mock('../services/auth.service.ts', () => {
  return {
    authClass: {
      login: () => Promise.resolve({}),
      getToken: () => JSON.stringify({ user: { username: 'tester' } }),
    },
  };
});
describe('PtgUiLogin', () => {
  let container;
  let getByTestId;
  let getByText;
  let getByLabelText;

  it('should create login component', () => {
    const {baseElement}= render(
      <BrowserRouter>
        <PtgUiLogin />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it(' Should Render login button', async () => {
    render(
      <BrowserRouter>
        <PtgUiLogin />
      </BrowserRouter>
    );
    const items = await screen.findAllByRole('button');
    expect(items).toHaveLength(1);
  });

  it('should render login form fields', async () => {
    const {container,getByTestId,getByText,getByLabelText} = render(
      <BrowserRouter>
        <PtgUiLogin />
      </BrowserRouter>
    );
    

    // text-inputs
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'test@test' },
    });
    fireEvent.focus(screen.getByTestId('password'));
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'test' },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: '' },
    });
    fireEvent.focusOut(screen.getByTestId('password'));

    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'raj@gmail.com' },
    });

    fireEvent.change(screen.getByTestId('password'), {
      target: { value: '12345' },
    });

    // button
    fireEvent.click(screen.getByTestId('login'));

    userEvent.click(screen.getByTestId('login'));
     
  });
});
