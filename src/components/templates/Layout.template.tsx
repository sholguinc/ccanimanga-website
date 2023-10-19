import { Outlet } from 'react-router-dom';

import { Scrollbar } from '@/components/molecules';
import { Header, Footer, Background } from '@/components/organisms';

export const LayoutTemplate = () => {
  return (
    <div className="layout-template">
      <main className="layout-template__body">
        <Scrollbar>
          <Header />
          <Background>
            <Outlet />
          </Background>
          <Footer />
        </Scrollbar>
      </main>
    </div>
  );
};
