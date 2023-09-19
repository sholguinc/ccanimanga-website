import React from 'react'
import ReactDOM from 'react-dom/client'

import { MenuContextProvider } from '@/context';
import Root from '@/components/Root.tsx';

import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuContextProvider>
      <Root />
    </MenuContextProvider>
  </React.StrictMode>,
)
