import { createSlice } from '@reduxjs/toolkit';

import { PHOTO_GET } from '../api';
import { AppDispatch } from './configureStore';

// const slice = createAsyncSlice({
//   name: 'photo',
//   fetchConfig: (id: string) => PHOTO_GET(id)
// });
const slice = createSlice({
  // define um nome específico para o slice
  name: 'photo',
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
    resetPhotoState(state) {
      state.data = null;
      state.error = null;
      state.loading = false;
    }
  }
});

export const { fetchStarted, fetchSuccess, fetchError, resetPhotoState } =
  slice.actions;
// ação assíncrona (thunk), recebe um payload
export const fetchPhoto =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchStarted());
      // config.fetchConfig é um método que retorna
      // o url e as opções do fetch
      const { url, options } = PHOTO_GET(payload);
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
