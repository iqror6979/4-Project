import React from 'react';
import { Navigate } from 'react-router-dom';

import Home from '../pages/Home/index';
import Shop from '../pages/shop';
import Features from '../pages/features';
import Blog from '../pages/blog';
import About from '../pages/about';

export const routes = [
  {
    // element: <Home />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop/> },
      { path: '/features', element: <Features/> },
      { path: '/blog', element: <Blog/> },
      { path: '/about', element: <About/> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
