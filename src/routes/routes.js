import React from 'react';
import { Navigate } from 'react-router-dom';

import Home from '../containers/Home';

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
