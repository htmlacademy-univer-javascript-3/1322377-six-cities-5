import { TCity } from '../../types';

export const getPageTitle = (offersCount: number, city: TCity) => {
  const pluralPlaces = !offersCount || offersCount > 1 ? 'places' : 'place';
  const formattedOffersCount = offersCount > 0 ? offersCount : 'No';

  return `${formattedOffersCount} ${pluralPlaces} to stay in ${city}`;
};
