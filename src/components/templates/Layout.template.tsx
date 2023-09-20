import { Outlet } from 'react-router-dom';

import { Scrollbar } from '@/components/molecules';
import { Sidebar, CollapsedSidebar, Footer } from '@/components/organisms';

export const LayoutTemplate = () => {
  return (
    <div className="layout-template">
      {/*<TopBarNavigation />*/}
      <section className="layout-template__content">
        <Sidebar />
        <CollapsedSidebar />
        <main className="layout-template__body">
          <Scrollbar>
            <Outlet />
            <Footer />
          </Scrollbar>
        </main>
      </section>
    </div>
  );
};
