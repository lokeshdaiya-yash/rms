import { render, screen } from '@testing-library/react';
import Profileskills from './profileskills';

const passingProps: any[] = [
  {
    skillType: 'angular',
    priority: 'Primary',
    proficiency: 'expert',
    expYears: 4,
    expMonths: 4,
  },
  {
    skillType: 'react',
    priority: 'Primary',
    proficiency: 'competent',
    expYears: 17,
    expMonths: 6,
  },
];

describe('ProfileSkills rendered successfully', () => {
  it('No skill added section is successfully rendered', () => {
    render(<Profileskills isLoading={false} skills={[]} />);
    expect(screen.getByText('No Skill added')).toBeTruthy();
  });

  it('Skills rendered successfully', () => {
    const { baseElement } = render(
      <Profileskills isLoading={false} skills={passingProps} />
    );
    expect(screen.getByText('angular')).toBeTruthy();
    expect(screen.getByText('react')).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });

  it('Spinner is working, while fetching data', () => {
    const { baseElement } = render(
      <Profileskills isLoading={true} skills={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
