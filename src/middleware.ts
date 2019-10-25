import { ActionT } from '../reducer';

const Middleware = () => (next: Function) => (action: ActionT): void => {
  next(action);
  switch (action.type) {
    case 'SET_PAGE': {
      window.history.pushState({}, '', action.payload);
      break;
    }
    default:
  }
};

export default Middleware;
