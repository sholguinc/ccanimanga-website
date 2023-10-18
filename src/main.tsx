import React from 'react';
import ReactDOM from 'react-dom/client';

import { MainContextProvider } from '@/context';
import Root from '@/components/Root.tsx';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainContextProvider>
      <Root />
    </MainContextProvider>
  </React.StrictMode>,
);
