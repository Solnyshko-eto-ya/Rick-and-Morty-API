import { MenuProps } from 'antd';

export interface Response<T> {
  info: ResponseMetadata;
  results: T;
}

export interface ResponseMetadata {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Episodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export type CharactersResponse = Response<Character[]>;
export type EpisodesResponse = Response<Episodes[]>;
export type InfoResponse = ResponseMetadata;

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Unknown = 'Unknown',
  Genderless = 'Genderless ',
  Any = 'Any',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'Unknown',
  Any = 'Any',
}

export enum Category {
  Locations = 'Locations',
  Characters = 'Characters',
  Episodes = 'Episodes',
}

export interface Context {
  gender: string;
  status: string;
  category: string;
  page: number;
  countPages: number;

  setCountPages: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleGender: MenuProps['onClick'];
  handleStatus: MenuProps['onClick'];
  handleCategory: MenuProps['onClick'];
}

/* 
{
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
  results: Array<{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }>
}

*/
