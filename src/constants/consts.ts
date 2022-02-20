export enum Tabs {
  OVERVIEW = `Overview`,
  DETAILS =`Details`,
  REVIEWS = `Reviews`
};

export enum ButtonTypes {
  SUBMIT = `submit`,
  RESET = `reset`,
  BUTTON = `button`
};

export const VIDEO_PROGRESS:number = 100;

export const MOVIES_TO_SHOW:number = 8;

export const BASE_URL:string = `https://5.react.pages.academy/wtw/`;

export const API_TIMEOUT:number = 5000;

export enum Errors {
  UNAUTHORIZED = 401
};

export enum AppRoute {
  HOME = `/`,
  FILMS = `/films/`,
  PROMO = `/films/promo`,
  LOGIN = `/login`,
  FAVORITE = `/favorite/`,
  PLAYER = `/player/`,
  REVIEWS = `/comments/`,
};

export enum AuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`
};
