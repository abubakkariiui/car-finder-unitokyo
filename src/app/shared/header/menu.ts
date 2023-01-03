import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    link: '/',
  },
  {
    id: 2,
    label: 'Advance Orders',
    subItems: [
      {
        id: 3,
        label: 'Place Advance Orders',
        link: '/advance-order',
        parentId: 2,
      },
      {
        id: 4,
        label: 'Track Order',
        link: '/track-order',
        parentId: 2,
      },
    ],
  },
  {
    id: 5,
    label: 'Advance Search',
    link: '/catalog/search/list',
  },
  {
    id: 6,
    label: 'Blog',
    link: '/blog-grid',
  },
  {
    id: 7,
    label: 'Inquiry',
    link: '/inquiry',
  },
  {
    id: 8,
    label: 'Promotion',
    link: '/promotion',
  },
  // {
  //   id: 7,
  //   label: 'Account',
  //   subItems: [
  //     {
  //         id: 8,
  //         label: 'Personal Info',
  //         link: '/account/info',
  //         parentId: 7
  //     },
  //     {
  //         id: 9,
  //         label: 'Password & Security',
  //         link: '/account/security',
  //         parentId: 7
  //     },
  //     {
  //       id: 10,
  //       label: 'My Cars',
  //       link: '/account/cars',
  //       parentId: 7
  //     },

  //     {
  //       id: 12,
  //       label: 'Reviews',
  //       link: '/account/reviews',
  //       parentId: 7
  //     },
  //     {
  //       id: 13,
  //       label: 'Notifications',
  //       link: '/account/notifications',
  //       parentId: 7
  //     },
  //     {
  //       id: 14,
  //       label: 'Sign In',
  //       link: '/auth/signin',
  //       parentId: 7
  //     },
  //     {
  //       id: 15,
  //       label: 'Sign Up',
  //       link: '/auth/signup',
  //       parentId: 7
  //     },
  //   ]
  // },
  // {
  //   id: 16,
  //   label: 'Vendor',
  //   subItems: [
  //     {
  //         id: 17,
  //         label: 'Sell Car',
  //         link: '/vendor/sell-car',
  //         parentId: 16
  //     },
  //     {
  //         id: 18,
  //         label: 'Ad Promotion Page',
  //         link: '/vendor/property-promotion',
  //         parentId: 16
  //     },
  //     {
  //       id: 19,
  //       label: 'Vendor Page',
  //       link: '/vendor/vendor',
  //       parentId: 16
  //     },
  //   ]
  // },
  // {
  //   id: 21,
  //   label: 'Pages',
  //   subItems: [
  //     {
  //         id: 22,
  //         label: 'About',
  //         link: '/about',
  //         parentId: 21
  //     },
  //     {
  //       id: 23,
  //       label: 'Blog',
  //       subItems: [
  //         {
  //           id: 24,
  //           label: 'Blog Grid',
  //           link: '/blog-grid',
  //           parentId: 23
  //         },
  //         {
  //           id: 25,
  //           label: 'Single Post',
  //           link: '/single-blog',
  //           parentId: 23
  //         }
  //       ]
  //     },
  //     {
  //         id: 26,
  //         label: 'Contacts',
  //         link: '/contacts',
  //         parentId: 21
  //     },
  //     {
  //       id: 27,
  //       label: 'Help Center',
  //       link: '/help-center',
  //       parentId: 21
  //     },
  //     {
  //       id: 28,
  //       label: '404 Not Found',
  //       link: '/404',
  //       parentId: 21
  //     },
  //   ]
  // },
];
