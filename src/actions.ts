import Axios, { AxiosResponse } from 'axios';

const API_URL = 'https://api.collegefootballdata.com';
const TEAMS_URL = `${API_URL}/teams`;
const CONFERENCES_URL = `${API_URL}/conferences`;

export const getTeams = (): ActionT => ({
  type: 'GET_TEAMS',
  payload: Axios.get(TEAMS_URL),
});

export const getConferences = (): ActionT => ({
  type: 'GET_CONFERENCES',
  payload: Axios.get(CONFERENCES_URL),
});

export const setPage = (name: string): ActionT => ({
  type: 'SET_PAGE',
  payload: name,
});

export type TeamT = {
  abbreviation: string;
  conference: string | null;
  division: string;
  id: number;
  logos?: string[];
  mascot: string;
  school: string;
};

export type ConferenceT = {
  abbreviation: string;
  id: number;
  name: string;
  short_name: string;
};

export type ResponseT = {
  data: TeamT[] | ConferenceT[];
};

export type ActionT = {
  type:
    | 'GET_TEAMS'
    | 'GET_CONFERENCES'
    | 'SET_PAGE'
    | 'GET_TEAMS_FULFILLED'
    | 'GET_CONFERENCES_FULFILLED';
  payload: Promise<AxiosResponse> | string | ResponseT;
};
