import { configureStore, combineReducers } from '@reduxjs/toolkit';

import counter from './counter';
import photo from './photo';
import token from './token';
import ui from './ui';
import user from './user';

// const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, counter, token, user, ui });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
