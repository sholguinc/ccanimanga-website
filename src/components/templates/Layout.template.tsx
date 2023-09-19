import { Outlet } from 'react-router-dom';

import { SideBar } from '@/components/organisms';

export const LayoutTemplate = () => {
  return (
    <div className="layout-template">
      {/*<TopBarNavigation />*/}
      <div className="layout-template-body">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};
