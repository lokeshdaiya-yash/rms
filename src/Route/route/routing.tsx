/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Layout and Routing for reusable components
 */

 //import UserDetails from '../../pages/userdetails/UserDetails';
// import Rating from '../../pages/rating/rating';

import { lazy } from 'react';
// import Resourcelist from '../../pages/resourcelist/resourcelist';
//import { Learning } from '../../pages/learning/Learning';
//import Roadmap from '../../pages//roadmap/roadmap';
//import Course from '../../courseData/Course';
//import NotFound from '../../pages//not-found/not-found';
import { USER_ROLE } from '../../constant'

// Import Components for routing using lazy loading
// const PtgUiHome = lazy(() => import('../../pages/home/Home'));
const Profile = lazy(() => import('../../pages/profile/profile'));
// const UserRole = lazy(() => import('../../pages/userrole/UserRole'));
// const WeekPicker = lazy(
//   () => import('../../components/weekpicker/weekpicker')
// );

// const Technology = lazy(
//   () => import('../../components/technology/technology')
// );
// const TimeLine = lazy(
//   () => import('../../components/timeline/timeline')
// );

const routing:any = [
 
  {
    path: '/profile',
    component: Profile,
    icon: 'fa fa-user-circle',
    label: 'Profile',
    availableInSidebar: true,
    unauthorized: ['Admin'],
  },
  // {
  //   path: '/learning',
  //   component: Learning,
  //   icon: 'fa fa-certificate',
  //   label: 'Learning',
  //   availableInSidebar: false,
  //   unauthorized: [],
  // },
  // {
  //   path: '/technology',
  //   component: Technology,
  //   icon: 'fa fa-upload',
  //   label: 'Technology',
  //   availableInSidebar: false,
  //   unauthorized: [USER_ROLE.USER],    
  // },
  // {
  //   path: '/timeline',
  //   component: TimeLine,
  //   icon: 'fa fa-hourglass',
  //   label: 'Timeline',
  //   availableInSidebar: false,
  //   unauthorized: [],
  // },
  // {
  //   path: '/timeline/:id',
  //   component: TimeLine,
  //   availableInSidebar: false,
  //   unauthorized: [],
  // },
  // {
  //   path: '/roadmap',
  //   component: Roadmap,
  //   icon: 'fas fa-chart-line',
  //   label: 'Roadmap',
  //   availableInSidebar: true,
  //   unauthorized: [USER_ROLE.USER],    
  // },
  
  // {
  //   path: '/Course',
  //   component: Course,
  //   icon: 'fa fa-book',
  //   label: 'Course',
  //   availableInSidebar: false,
  //   unauthorized: [],
  // },
  // {
  //   path: '*',
  //   component: NotFound,
  //   availableInSidebar: false,
  //   unauthorized: [],
  // },
];
export default routing;
