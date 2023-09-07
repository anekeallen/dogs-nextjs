'use client';

// import React from 'react'
import React, { createContext, useState, useEffect, useCallback } from 'react';

import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
// import { useRouter } from 'next/router';
// import  useNavigation  from 'next/navigation';

// console.log(useNavigation)

// import { useNavigate } from 'react-router-dom';

// Definindo o tipo para os dados do usuário
type UserData = {
  id: number;
  username: string;
  nome: string;
  // Adicione outras propriedades relevantes para os dados do usuário
};

// Definindo o tipo para o valor do contexto do usuário
type UserContextValue = {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
  data: UserData | null;
  error: string | null;
  login: boolean | null;
  loading: boolean;
};

// export const UserContext = React.createContext();

export const UserContext = createContext<UserContextValue>({
  userLogin: async () => {},
  userLogout: async () => {},
  data: null,
  error: null,
  login: null,
  loading: false
});

// Definindo as propriedades do componente UserStorage
type UserStorageProps = {
  children: React.ReactNode;
};

export const UserStorage: React.FC<UserStorageProps> = ({ children }) => {
  const [data, setData] = useState<UserData | null>(null);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const router = useRouter();
  // const navigation = useNavigation();
  // Função para realizar o logout do usuário
  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');

    // Redirecionar o usuário para a página de login após o logout
    // router.push('/login');
    // navigation.navigate('/login')
  }, []);

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error('Token inválido');

          await getUser(token);
        } catch (error) {
          // console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        userLogout();
      }
    }

    autoLogin();
  }, [userLogout]);

  // Função para obter os dados do usuário a partir do token
  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const response_json = await response.json();

    setData(response_json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });

      const tokenRes = await fetch(url, options);

      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);

      const { token } = await tokenRes.json();

      window.localStorage.setItem('token', token);

      await getUser(token);

      // Redirecionar o usuário para a página da conta após o login
      // router.push('/conta');
      // navigation.navigate('/conta')
      // Se você estiver usando o Next.js, pode usar o router.push em vez de navigate("/conta").
      // Mas certifique-se de importar o router correto do Next.js.

      // navigate('/conta');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }

      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, login, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
