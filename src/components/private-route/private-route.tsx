import React from 'react';
import { Navigate } from 'react-router-dom';
import { EAppRoute } from '../../const';

type PrivateRouteProps = {
  hasAccess: boolean;
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { hasAccess, children } = props;

  return hasAccess ? children : <Navigate to={EAppRoute.Login} />;
};

export default PrivateRoute;
