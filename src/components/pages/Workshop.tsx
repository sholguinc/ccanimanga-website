import { useParams, Navigate } from 'react-router-dom';

import { workshops } from '@/data';
import { WorkshopTemplate, ImagesLoadedTemplate } from '@/components/templates';

const Workshop = () => {
  const { workshopId } = useParams();
  const workshop = workshops[workshopId as string];

  return workshop ? (
    <ImagesLoadedTemplate>
      <WorkshopTemplate workshop={workshop} />
    </ImagesLoadedTemplate>
  ) : (
    <Navigate replace to="/404" />
  );
};

export default Workshop;
