import { createSlice } from '@reduxjs/toolkit';

import { USER_GET } from '../api';
import createAsyncSlice from '../store/helper/createAsyncSlice';
import { AppDispatch, RootState } from './configureStore';
import { fetchToken, resetTokenState } from './token';

const slice = createSlice({
  // define um nome específico para o slice
  name: 'user',
  // o estado inicial possui propriedades específicas
  // mas podemos adicionar novas / escrever por cima das existentes
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  // lista de reducers padrões
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    resetUserState(state) {
      state.data = null;
      state.error = null;
      state.loading = false;
    }
  }
});

export const { fetchStarted, fetchSuccess, fetchError, resetUserState } =
  slice.actions;
export const fetchUser = (token: string) => async (dispatch: AppDispatch) => {
  // const token = window.localStorage.getItem('token');

  try {
    dispatch(fetchStarted());
    // config.fetchConfig é um método que retorna
    // o url e as opções do fetch
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) throw new Error(response.statusText);
    return dispatch(fetchSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      return dispatch(fetchError(error.message));
    } else {
      return null;
    }
  }
};
// ação assíncrona (thunk), recebe um payload
export const userLogin = (user: BodyInit) => async (dispatch: AppDispatch) => {
  const action = await dispatch(fetchToken(user));
  if (action?.payload.token) {
    window.localStorage.setItem('token', action.payload.token);
    await dispatch(fetchUser(action?.payload?.token));
  }
};
export const userLogout = () => async (dispatch: AppDispatch) => {
  dispatch(resetUserState());
  dispatch(resetTokenState());
  window.localStorage.removeItem('token');
};
export const autoLogin =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { token } = getState();
    if (token?.data?.token) {
      const { type } = await dispatch(fetchUser(token.data.token));

      if (type === fetchError.type) {
        dispatch(userLogout());
      }
    }
    // dispatch(resetTokenState());
  };

export default slice.reducer;
