import { render,fireEvent } from '@testing-library/react';

import Projectsdetails from './projectsdetails';

describe('Projectsdetails', () => {
  it('should render project details along with close button', () => {
    const { baseElement, getByTestId } = render(
      <Projectsdetails
        handleClose={()=>jest.fn()}
        show={true}
        projectDetails={{
          projectTitle: 'Test Project',
          startDate: '27/09/2022',
          endDate: '27/10/2022',
          technology: [
            { label: 'react' },
            { label: 'angular' },
            { label: 'html' },
          ],
        }}
      />
    );
    fireEvent.click(getByTestId('close-btn'));
    expect(baseElement).toBeTruthy();
  });
});
