import React from 'react';
import * as C from './styles';
import Logo from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
  return (
    <C.Container>
      <img src={Logo} alt="Gitcollection" />
      <C.Title>Catálogo de repositórios do GitHub</C.Title>
      <C.Form>
        <input placeholder="Username/Repository_name" />
        <button type="submit">Buscar</button>
      </C.Form>
    </C.Container>
  );
};
