import { workshops as workshopsObject } from '@/data';
import { WorkshopsTemplate } from '@/components/templates';

const Workshops = () => {
  const workshops = Object.values(workshopsObject);
  return <WorkshopsTemplate workshops={workshops} />;
};

export default Workshops;