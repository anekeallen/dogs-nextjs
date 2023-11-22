import { RootState } from '@/app/store/configureStore';
import { useRouter } from 'next/router';
import React from 'react';

// import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ProtectedRouteProps {
  children: React.ReactNode; // Propriedade children do tipo ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  if (data) {
    // Redirecionar para a página de login se o usuário não estiver logado
    router.push('/login');
    return null; // Não renderize nada até que a página de login seja carregada
  }

  return <>{children}</>;
};

export default ProtectedRoute;
