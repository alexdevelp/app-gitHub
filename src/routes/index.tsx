import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Dashboard } from '../pages/Dashboard';
// import { Repo } from './Repo';

//Carregamento Async / por demanda com  React Lazy
const Dashboard = React.lazy(
  () =>
    /* webpackPrefetch: true */ /* webpackChunkName: "dashboard" */ import(
      '../pages/Dashboard'
    ),
);
const Repo = React.lazy(
  () =>
    /* webpackPrefetch: true */ /* webpackChunkName: "rositories" */ import(
      '../pages/Repo'
    ),
);

export const Rotas: React.FC = () => {
  return (
    <React.Suspense fallback={'Carregando...'}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repositories" element={<Repo />} />
      </Routes>
    </React.Suspense>
  );
};
