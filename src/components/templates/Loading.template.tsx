import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { NavigateContext } from '@/context';
import { ILoadingTemplate } from '@/models';

export const LoadingTemplate = ({ duration }: ILoadingTemplate) => {
  const location = useLocation();
  const { loading, setLoading } = useContext(NavigateContext);

  useEffect(() => {
    !loading && setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, duration);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return (
    loading && (
      <div className="loading-template">
        <p className="loading-template__content" />
      </div>
    )
  );
};
