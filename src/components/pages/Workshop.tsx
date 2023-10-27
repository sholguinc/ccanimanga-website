import { useParams, Navigate } from 'react-router-dom';

import { workshops } from '@/data';
import { WorkshopTemplate } from '@/components/templates';

export const Workshop = () => {
  const { workshopId } = useParams();
  const workshop = workshops[workshopId as string];

  return workshop ? (
    <WorkshopTemplate workshop={workshop} />
  ) : (
    <Navigate replace to="/404" />
  );
};
