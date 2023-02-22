import { MenuProps } from 'antd';
import { Category, Status, Gender } from './types';

export const CATEGORIES: MenuProps['items'] = [
  {
    key: Category.Characters,
    label: 'Characters',
  },
  {
    key: Category.Episodes,
    label: 'Episodes',
  },
  {
    key: Category.Locations,
    label: 'Locations',
  },
];

export const STATUSES: MenuProps['items'] = [
  {
    key: Status.Alive,
    label: 'Alive',
  },
  {
    key: Status.Dead,
    label: 'Dead',
  },
  {
    key: Status.Unknown,
    label: 'Unknown',
  },
];

export const GENDERS: MenuProps['items'] = [
  {
    key: Gender.Male,
    label: 'Male',
  },
  {
    key: Gender.Female,
    label: 'Female',
  },
  {
    key: Gender.Unknown,
    label: 'Unknown',
  },
  {
    key: Gender.Genderless,
    label: 'Genderless ',
  },
];
