import { render } from '@testing-library/react';
import { Project } from '../../constants/interface/project';
import { authClass } from '../auth/services/auth.service';

import Profileprojects from './profileprojects';

describe('Profileprojects', () => {
  it('should render successfully', async() => {
    const response = await authClass.getProfile(1)
    const { baseElement } = render(<Profileprojects isLoading={false} projects={response.data} handleShow={function (): void {
      throw new Error('Function not implemented.');
    } } setProjectDetailHandler={function (projDetails: Project): void {
      throw new Error('Function not implemented.');
    } } />);
    expect(baseElement).toBeTruthy();
  });
});
