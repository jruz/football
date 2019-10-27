import { ActionT } from './actions';

const Middleware = () => (next: Function) => (action: ActionT): void => {
  next(action);
  switch (action.type) {
    case 'SET_PAGE': {
      const page = <string>action.payload;
      window.history.pushState({}, '', page);
      break;
    }
    default:
  }
};

export default Middleware;
