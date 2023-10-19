import { useParams, Navigate } from 'react-router-dom';

import { workshops } from '@/data';

export const Workshop = () => {
  const { workshopId } = useParams();
  const workshop = workshops[workshopId as string];

  return workshop ? <div>{workshopId}</div> : <Navigate replace to="/404" />;
};
