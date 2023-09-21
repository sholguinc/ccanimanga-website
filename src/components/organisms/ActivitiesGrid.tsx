import { Activity } from '@/components/molecules';

import { activitiesGrid } from '@/data';

export const ActivitiesGrid = () => {
  return (
    <section className="activities-grid">
      {activitiesGrid.map((activity, index) => (
        <Activity data={activity} key={index} />
      ))}
    </section>
  );
};
