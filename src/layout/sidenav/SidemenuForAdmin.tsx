/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Side bar/navigation list
 */
{
  /*--List of sidebar/side navigation--*/
}
export const NavigationDataForAdmin: {
  path: string;
  icon: string;
  label: string;
  disabled: boolean;
}[] = [
  {
    path: '/home',
    icon: 'fas fa-home',
    label: 'DASHBOARD',
    disabled: false,
  },

  {
    path: '/rating',
    icon: 'fa fa-users',
    label: 'Rating',
    disabled: false,
  },
  {
    path: '/profile',
    icon: 'fa-solid fa-file',
    label: 'Profile',
    disabled: false,
  },
  {
    path: '/multistepform',
    icon: 'fa-solid fa-calendar-days',
    label: 'User Details',
    disabled: false,
  },
  {
    path: '/resourcelist',
    icon: 'fa-solid fa-folder',
    label: 'Resource List',
    disabled: false,
  },
  {
    path: '/Time Sheet',
    icon: 'fa-solid fa-clock',
    label: 'TIME SHEETS',
    disabled: false,
  },
  {
    path: '/learning',
    icon: 'fa-solid fa-book-open',
    label: 'Learning',
    disabled: false,
  },
  {
    path: '/timeline',
    icon: 'fa-solid fa-wallet',
    label: 'Timeline',
    disabled: false,
  },
  {
    path: '/Accounts',
    icon: 'fa-solid fa-gear',
    label: 'ACCOUNTS',
    disabled: false,
  },
];
