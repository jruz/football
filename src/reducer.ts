import { TeamT, ConferenceT, ActionT, ResponseT } from './actions';

const initialState: StateT = {
  teams: [],
  conferences: [],
  page: '',
};

export type StateT = {
  teams: TeamT[];
  conferences: ConferenceT[];
  page: string;
};

const Reducer = (state: StateT = initialState, action: ActionT): StateT => {
  switch (action.type) {
    case 'GET_TEAMS_FULFILLED': {
      const response = action.payload as ResponseT;
      const teams = response.data as TeamT[];
      return { ...state, teams };
    }
    case 'GET_CONFERENCES_FULFILLED': {
      const response = action.payload as ResponseT;
      const conferences = response.data as ConferenceT[];
      return { ...state, conferences };
    }
    case 'SET_PAGE': {
      const page = action.payload as string;
      return { ...state, page };
    }
    default: {
      return state;
    }
  }
};

export default Reducer;
