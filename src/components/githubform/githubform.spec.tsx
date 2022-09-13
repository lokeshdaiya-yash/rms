import { render } from '@testing-library/react';
import { FormEvent } from 'react';

import Githubform from './githubform';

describe('Githubform', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Githubform show={false} handleClose={function (): void {
      throw new Error('Function not implemented.');
    } } submitHandler={function (event: any): void {
      throw new Error('Function not implemented.');
    } } handlerUrlChange={function (event: FormEvent<HTMLInputElement>): void {
      throw new Error('Function not implemented.');
    } } url={''} />);
    expect(baseElement).toBeTruthy();
  });
});
