import { Outlet } from 'react-router-dom';

import { Scrollbar } from '@/components/molecules';
import { Header, Footer } from '@/components/organisms';

export const LayoutTemplate = () => {
  return (
    <div className="layout-template">
      <main className="layout-template__body">
        <Scrollbar>
          <Header />
          <Outlet />
          <Footer />
        </Scrollbar>
      </main>
    </div>
  );
};
