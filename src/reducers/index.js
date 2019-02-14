/* eslint-disable default-case */
import ADD_ARTICLE from '../constants/action-types';

const initialState = {
  articles: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
      });
  }
  return state;
}
