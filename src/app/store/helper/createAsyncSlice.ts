// importa o createSlice
import { createSlice } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from '../configureStore';

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */

// type InicialStateProps = {
//   loading: boolean;
//   data: DataContent | null;
//   error: string | null;
// };

// type CreateAsyncSliceProps = {
//   name: string;
//   initialState: unknown;
//   reducers: any;
//   fetchConfig: any;
// };

interface AsyncSliceConfig {
  name: string;
  initialState?: unknown;
  reducers?: Record<string, (state: unknown, action?: unknown) => void>;
  fetchConfig: (payload: unknown) => {
    url: string;
    options: RequestInit;
  };
}

const createAsyncSlice = (config: AsyncSliceConfig) => {
  // cria um slice
  const slice = createSlice({
    // define um nome específico para o slice
    name: config.name,
    // o estado inicial possui propriedades específicas
    // mas podemos adicionar novas / escrever por cima das existentes
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState
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
      // novos reducers caso necessário
      ...config.reducers
    }
  });

  // desestruturação das ações
  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;
  // ação assíncrona (thunk), recebe um payload
  const asyncAction = (payload: unknown) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchStarted());
      // config.fetchConfig é um método que retorna
      // o url e as opções do fetch
      const { url, options } = config.fetchConfig(payload);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return dispatch(fetchSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        return dispatch(fetchError(error.message));
      } else {
        return null;
      }
    }
  };

  // a função retorna as propriedades de slice e a ação assíncrona
  return { ...slice, asyncAction };
};

export default createAsyncSlice;
