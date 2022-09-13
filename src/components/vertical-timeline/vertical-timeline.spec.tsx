import { render, cleanup, fireEvent } from '@testing-library/react';
import VerticalTimelineCom from './vertical-timeline';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('VerticalTimeline', () => {
  beforeEach(() => {    
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;    
    let data: any = {
      user: {
        id: '62e6c8dd78dc790cb0680afe',
      },
    };
    window.localStorage.setItem('userdata', JSON.stringify(data));
  });
  const props = {
    isLoading: false,
    timeLine: [
      {
        tech_name: 'JAVASCRIPT',
        startDate: '2022-08-26T12:22:57.326Z',
        endDate: '09/02/2022',
        status: 'ongoing',
        githubLink: '',
        title: 'Javascript',
        category: 'JAVASCRIPT',
        priority: 1,
        domain: 'FRONTEND',
        categoryPriority: 1,
        topics:
          'Introduction of Js, Datatypes, Functions in JS, Hoisting, Closures, Objects, Document Object Model (DOM),  Browser Object Model( BOM), ES6 Features, Promise in Js',
        description: '',
      },
      {
        tech_name: 'ANGULAR',
        startDate: null,
        endDate: '2022-08-01T15:06:59.039Z',
        status: 'completed',
        githubLink: 'www.github.com',
        title: 'Angular',
        category: 'ANGULAR',
        priority: 2,
        domain: 'FRONTEND',
        categoryPriority: 1,
        topics:
          'Introduction, Components, Databinding, Directives, Services, Observables, Handling Forms in Angular, Making Http Requests, Lifecycle Methods in Angualr, Routing, Error Handling in Angular',
        description: '',
      },      
    ] as any,
    setTimeline: jest.fn(),
    handleShow: jest.fn(),
    id: '62e6c8dd78dc790cb0680afe',
    user: { username: 'Nayan Pimpare', designation: 'UI Specialist' },
  };
  afterEach(cleanup);
  it('should render successfully', () => {
    const { baseElement } = render(<VerticalTimelineCom {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it('should click on btnContinue', () => {
    const { getByTestId } = render(<VerticalTimelineCom {...props} />);
    fireEvent.click(getByTestId('btnContinue'));
  });

  it('should click on btnStartCourse', () => {
    let newProps = {
      isLoading: false,
      timeLine: [
        {
          tech_name: 'JAVASCRIPT',
          startDate: null,
          endDate: null,
          status: '',
          githubLink: '',
          title: 'Javascript',
          category: 'JAVASCRIPT',
          priority: 1,
          domain: 'FRONTEND',
          categoryPriority: 1,
          topics:
            'Introduction of Js, Datatypes, Functions in JS, Hoisting, Closures, Objects, Document Object Model (DOM),  Browser Object Model( BOM), ES6 Features, Promise in Js',
          description: '',
        },
      ] as any,
      setTimeline: jest.fn(),
      handleShow: jest.fn(),
      id: '62e6c8dd78dc790cb0680afe',
      user: { username: 'Nayan Pimpare', designation: 'UI Specialist' },
    };
    const { getByTestId } = render(<VerticalTimelineCom {...newProps} />);
    fireEvent.click(getByTestId('btnStartCourse'));    
  });

  it('should click on btnEndCourse', () => {
    let newProps = {
      isLoading: false,
      timeLine: [
        {
          tech_name: 'JAVASCRIPT',
          startDate: '2022-08-26T12:22:57.326Z',
          endDate: '09/02/2022',
          status: 'ongoing',
          githubLink: '',
          title: 'Javascript',
          category: 'JAVASCRIPT',
          priority: 1,
          domain: 'FRONTEND',
          categoryPriority: 1,
          topics:
            'Introduction of Js, Datatypes, Functions in JS, Hoisting, Closures, Objects, Document Object Model (DOM),  Browser Object Model( BOM), ES6 Features, Promise in Js',
          description: '',
        },
      ] as any,
      setTimeline: jest.fn(),
      handleShow: jest.fn(),
      id: '62e6c8dd78dc790cb0680afe',
      user: { username: 'Nayan Pimpare', designation: 'UI Specialist' },
    };
    const { getByTestId } = render(<VerticalTimelineCom {...newProps} />);
    fireEvent.click(getByTestId('btnEndCourse'));
  });
});
