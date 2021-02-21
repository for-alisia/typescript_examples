/** Action Types */
import { ActionType } from '../action-types';

/** Actions Models */
export interface SearchRepoAction {
  type: ActionType.SEARCH_REPO;
}

export interface SearchRepoSuccessAction {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

export interface SearchRepoFailAction {
  type: ActionType.SEARCH_REPO_FAILED;
  payload: string;
}

export type Action = SearchRepoAction | SearchRepoSuccessAction | SearchRepoFailAction;
