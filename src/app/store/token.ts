'use client';
import { createSlice } from '@reduxjs/toolkit';

import { TOKEN_POST, TOKEN_VALIDATE_POST } from '../api';
import createAsyncSlice from '../store/helper/createAsyncSlice';
import { AppDispatch } from './configureStore';

// const slice = createAsyncSlice({
//   name: 'photo',
//   fetchConfig: (id: string) => PHOTO_GET(id)
// });
const slice = createSlice({
  // define um nome específico para o slice
  name: 'token',
  // o estado inicial possui propriedades específicas
  // mas podemos adicionar novas / escrever por cima das existentes
  initialState: {
    loading: false,
    data: {
      token: window.localStorage.getItem('token') || null
    },
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
      state.data = { token: null };
      state.error = action.payload;
    },
    resetTokenState(state) {
      state.data = { token: null };
      state.error = null;
      state.loading = false;
    }
  }
});

export const { fetchStarted, fetchSuccess, fetchError, resetTokenState } =
  slice.actions;
// ação assíncrona (thunk), recebe um payload
export const fetchToken =
  (user: BodyInit | { username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    // const token = window.localStorage.getItem('token');

    try {
      dispatch(fetchStarted());
      // config.fetchConfig é um método que retorna
      // o url e as opções do fetch
      const { url, options } = TOKEN_POST(user);
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

export default slice.reducer;
