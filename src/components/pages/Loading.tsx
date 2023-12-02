import { Outlet } from 'react-router-dom';

import { LoadingTemplate } from '@/components/templates';

export const Loading = () => {
  return (
    <>
      <LoadingTemplate />
      <Outlet />
    </>
  );
};
