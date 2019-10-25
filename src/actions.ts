import Axios, { AxiosResponse } from 'axios';

const API_URL = 'https://api.collegefootballdata.com';
const TEAMS_URL = `${API_URL}/teams`;
const CONFERENCES_URL = `${API_URL}/conferences`;

export type PageT = 'teams' | 'conferences';

interface ActionT {
  type: 'GET_TEAMS' | 'GET_CONFERENCES' | 'SET_PAGE';
  payload: Promise<AxiosResponse> | PageT;
}

export const getTeams = (): ActionT => ({
  type: 'GET_TEAMS',
  payload: Axios.get(TEAMS_URL),
});

export const getConferences = (): ActionT => ({
  type: 'GET_CONFERENCES',
  payload: Axios.get(CONFERENCES_URL),
});

export const setPage = (name: PageT): ActionT => ({
  type: 'SET_PAGE',
  payload: name,
});
