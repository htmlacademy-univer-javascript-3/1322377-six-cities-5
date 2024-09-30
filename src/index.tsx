import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app.tsx';
import { TCity } from './types';
import { MOCK_OFFERS } from './mock/offers.ts';

const CITY: TCity = 'Amsterdam';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App city={CITY} offers={MOCK_OFFERS} />
  </React.StrictMode>,
);
