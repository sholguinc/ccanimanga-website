import { Outlet } from 'react-router-dom';

import { Scrollbar } from '@/components/atoms';
import { Sidebar } from '@/components/organisms';

export const LayoutTemplate = () => {
  return (
    <div className="layout-template">
      {/*<TopBarNavigation />*/}
      <section className="layout-template__body">
        <Sidebar />
        <main className="layout-template__body__content">
          <Scrollbar>
            <Outlet />
            {/*<Footer scrollableNodeRef={scrollableNodeRef} />*/}
          </Scrollbar>
        </main>
      </section>
    </div>
  );
};
