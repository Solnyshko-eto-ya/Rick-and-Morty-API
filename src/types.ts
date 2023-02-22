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

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Unknown = 'Unknown',
  Genderless = 'Genderless ',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'Unknown',
}

export enum Category {
  Locations = 'Locations',
  Characters = 'Characters',
  Episodes = 'Episodes',
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
