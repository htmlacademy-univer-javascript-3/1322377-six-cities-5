import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { TOfferCard } from '../../types';

const FILLED_BOOKMARK_BUTTON_CLASS = 'place-card__bookmark-button--active';

interface ICityCardProps {
  city: TOfferCard;
}

export const CityCard: React.FC<ICityCardProps> = ({ city }) => {
  const bookmarkButtonClassName = cn('place-card__bookmark-button', 'button', {
    [FILLED_BOOKMARK_BUTTON_CLASS]: city.inBookmarks,
  });

  const rankInPercent = city.rating * 20;

  return (
    <article className="cities__card place-card">
      {city.mark && (
        <div className="place-card__mark">
          <span>{city.mark}</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${city.id}`}>
          <img
            className="place-card__image"
            src={city.imgUrl}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{city.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkButtonClassName} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rankInPercent}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${city.id}`}>{city.title}</Link>
        </h2>
        <p className="place-card__type">{city.type}</p>
      </div>
    </article>
  );
};
