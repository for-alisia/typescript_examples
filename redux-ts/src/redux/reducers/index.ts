/** Dependencies */
import { combineReducers } from 'redux';

/** Reducers */
import repoReducer from './repo.reducer';

const reducers = combineReducers({
  repo: repoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
