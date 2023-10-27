import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { NavigateContext, ScrollContext } from '@/context';
import { ILoadingTemplate } from '@/models';

export const LoadingTemplate = ({ duration }: ILoadingTemplate) => {
  const location = useLocation();
  const { loading, setLoading } = useContext(NavigateContext);
  const { scrollBack } = useContext(ScrollContext);

  useEffect(() => {
    !loading && setLoading(true);
    scrollBack('instant');
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
