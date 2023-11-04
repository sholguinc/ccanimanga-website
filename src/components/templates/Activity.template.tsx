import { Description } from '@/components/molecules';
import { PageBackground, Gallery, Banner } from '@/components/organisms';

import { IActivityTemplate } from '@/models';

export const ActivityTemplate = ({
  name,
  background,
  description,
  gallery,
}: IActivityTemplate) => {
  return (
    <PageBackground {...background}>
      <div className="workshop-template">
        <Banner title={name} />
        <Description {...description} />
        <Gallery images={gallery} />
      </div>
    </PageBackground>
  );
};
