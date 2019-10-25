import { PageT } from './actions';

const initialState: StateT = {
  teams: [],
  conferences: [],
  page: null,
};

export interface TeamT {
  abbreviation: string;
  conference: string | null;
  division: string;
  id: number;
  logos?: string[];
  mascot: string;
  school: string;
}

export interface ConferenceT {
  abbreviation: string;
  id: number;
  name: string;
  short_name: string;
}

export interface StateT {
  teams: TeamT[];
  conferences: ConferenceT[];
  page: PageT | null;
}

interface ActionT {
  type: 'GET_TEAMS_FULFILLED' | 'GET_CONFERENCES_FULFILLED' | 'SET_PAGE';
  payload: { data: TeamT[] | ConferenceT[] | PageT };
}

const Reducer = (state: StateT = initialState, action: ActionT): StateT => {
  switch (action.type) {
    case 'GET_TEAMS_FULFILLED': {
      return { ...state, teams: action.payload.data };
    }
    case 'GET_CONFERENCES_FULFILLED': {
      return { ...state, conferences: action.payload.data };
    }
    default: {
      return state;
    }
  }
};

export default Reducer;
