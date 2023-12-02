import { workshops as workshopsObject } from '@/data';
import {
  WorkshopsTemplate,
  ImagesLoadedTemplate,
} from '@/components/templates';

const Workshops = () => {
  const workshops = Object.values(workshopsObject);
  return (
    <ImagesLoadedTemplate>
      <WorkshopsTemplate workshops={workshops} />
    </ImagesLoadedTemplate>
  );
};

export default Workshops;
