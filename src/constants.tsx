import { MenuProps } from 'antd';
import { Category, Status, Gender } from './types';
import React from 'react';

export const CATEGORIES: MenuProps['items'] = [
  {
    key: Category.Characters,
    label: <a href='/'>Characters</a>,
  },
  {
    key: Category.Episodes,
    label: <a href='/episodes'>Episodes</a>,
  },
  {
    key: Category.Locations,
    label: <a href='/locations'>Locations</a>,
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
  {
    key: Status.Any,
    label: 'Any',
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
  {
    key: Gender.Any,
    label: 'Any',
  },
];
