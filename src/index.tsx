import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@components/app/app';
import { MOCK_OFFERS } from './mock/offers.ts';
import { TCity } from './types';


const CITY: TCity = 'Amsterdam';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App city={CITY} offers={MOCK_OFFERS} />
  </React.StrictMode>,
);
