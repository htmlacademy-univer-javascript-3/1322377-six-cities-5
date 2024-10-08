export const enum EAppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export const enum EAuthorizationStatus {
  Authorized = 'AUTHORIZED',
  NotAuthorized = 'NOT_AUTHORIZED',
  Unknown = 'UNKNOWN',
}
