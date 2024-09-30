import React from 'react';
import { TCity, TOfferCard } from '../../types';
import { Main } from '../../pages/main/main.tsx';

interface IAppProps {
  city: TCity;
  offers: TOfferCard[];
}

export const App: React.FC<IAppProps> = ({ city, offers }) => (
  <Main currentCity={city} offersCount={offers.length} offers={offers} />
);
