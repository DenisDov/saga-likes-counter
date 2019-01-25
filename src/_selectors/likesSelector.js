import { createSelector } from 'reselect';

export const likesSelector = createSelector(
  state => state.LikesReducer.likes,
  likes => likes
);
