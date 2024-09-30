export type TCity =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export enum EOfferType {
  Apartment = 'Apartment',
  Room = 'Room',
}

export type TOfferCard = {
  id: number;
  mark?: string;
  imgUrl: string;
  price: number;
  rating: number;
  inBookmarks: boolean;
  title: string;
  type: EOfferType;
};
