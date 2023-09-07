import { useRouter } from 'next/router';
import React, { useContext } from 'react';

// import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

interface ProtectedRouteProps {
  children: React.ReactNode; // Propriedade children do tipo ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { login } = useContext(UserContext);
  const router = useRouter();

  if (!login) {
    // Redirecionar para a página de login se o usuário não estiver logado
    router.push('/login');
    return null; // Não renderize nada até que a página de login seja carregada
  }

  return <>{children}</>;
};

export default ProtectedRoute;
