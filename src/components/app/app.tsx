import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '@components/private-route/private-route';
import { Favorites } from '@pages/favorites/favorites';
import { Login } from '@pages/login/login';
import { Main } from '@pages/main/main';
import { NotFound } from '@pages/not-found/not-found';
import { Offer } from '@pages/offer/offer';
import { EAuthorizationStatus } from '../../const';
import { TCity, TOfferCard } from '../../types';

interface IAppProps {
  city: TCity;
  offers: TOfferCard[];
  authStatus: EAuthorizationStatus;
}

export const App: React.FC<IAppProps> = ({ city, offers, authStatus }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <Main
              currentCity={city}
              offersCount={offers.length}
              offers={offers}
            />
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute
              hasAccess={authStatus === EAuthorizationStatus.Authorized}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="offer/:id" element={<Offer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
