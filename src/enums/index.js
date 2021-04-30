/**
 * Enum for common colors.
 * @readonly
 * @enum {string}
 */
export const COLORS = Object.freeze({
  LIGHT_GREY: '#f5f5f5',
  GREY: '#a8a8a8',
  DARK_GREY: '#5c5c5c',
  WHITE: '#ffffff',
});

/**
 * Enum for teams object.
 * @readonly
 * @enum {{ TRI_CODE: string, NAME: string, ID: string }}
 */
export const TEAMS = Object.freeze({
  TOR: {
    TRI_CODE: 'TOR',
    NAME: 'raptors',
    ID: '1610612761',
  },
});

/**
 * Enum for teams colors.
 * @readonly
 * @enum {{ [TRI_CODE]: string }}
 */
export const TEAM_COLORS = Object.freeze({
  ATL: '#e21a37',
  BKN: '#000000',
  BOS: '#00611b',
  CHA: '#00848e',
  CHI: '#b00203',
  CLE: '#860038',
  DAL: '#006bb6',
  DEN: '#0e2240',
  DET: '#fa002c',
  GSW: '#003399',
  HOU: '#cd212b',
  IND: '#ffb517',
  LAC: '#ed174b',
  LAL: '#fdba33',
  MEM: '#5d76a9',
  MIA: '#98002e',
  MIL: '#00471b',
  MIN: '#2b6291',
  NOP: '#0c2340',
  NYK: '#f58426',
  OKC: '#002d62',
  ORL: '#0077c0',
  PHI: '#ef0022',
  PHX: '#e76221',
  POR: '#cc0000',
  SAC: '#51388a',
  SAS: '#959191',
  TOR: '#bd1b21',
  UTA: '#f9a11e',
  WAS: '#cf142b',
});

export const MVP_PLAYERS = Object.freeze([
  { NAME: 'kobe' },
  { NAME: 'jordan' },
]);

export const DEFAULT_YEAR = 2019;

/**
 * Enum for years array.
 * @readonly
 * @enum {{ value: number, label: string }}
 */
export const YEARS = Object.freeze([
  { value: 2019, label: '2019 - 20' },
  { value: 2018, label: '2018 - 19' },
  { value: 2017, label: '2017 - 18' },
]);

/**
 * Enum for player positions array.
 * @readonly
 * @enum {{ value: string, label: string }}
 */

export const POSITIONS = Object.freeze([
  { value: 'F', label: 'Forward' },
  { value: 'C', label: 'Center' },
  { value: 'G', label: 'Guard' },
]);
