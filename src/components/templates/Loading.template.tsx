import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ILoadingTemplate } from '@/models';

export const LoadingTemplate = ({ duration }: ILoadingTemplate) => {
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, duration);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return (
    pageLoading && (
      <div className="loading-template">
        <p className="loading-template__content" />
      </div>
    )
  );
};
