/** @format */

export type Cards = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
};
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'successs',
  ERROR = 'error',
}
export interface CardsSliceState {
  items: Cards[];
  status: Status;
}
