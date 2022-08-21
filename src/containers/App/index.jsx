import React from 'react';

import Navbar from '../../components/navbar';

import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes/routes';

export default () => {
  const content = useRoutes(routes);
  return <>
  <Navbar/>
  {content}
  </>;
};
