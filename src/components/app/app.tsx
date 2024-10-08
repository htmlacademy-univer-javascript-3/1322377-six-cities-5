import React from 'react';
import { Main } from '@pages/main/main';
import { TCity, TOfferCard } from '../../types';

interface IAppProps {
  city: TCity;
  offers: TOfferCard[];
}

export const App: React.FC<IAppProps> = ({ city, offers }) => (
  <Main currentCity={city} offersCount={offers.length} offers={offers} />
);
