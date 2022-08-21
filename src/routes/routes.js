import React from 'react';
import { Navigate } from 'react-router-dom';


export const routes = [
  {
    // element: <Home />,
    children: [
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
