import React from 'react';
import { Navigate } from 'react-router-dom';

import Home from '../pages/Home/index';

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: '/', element: <Home /> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
