import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Loading } from '@/components/atoms';
import { NavigateContext, ScrollContext } from '@/context';

export const LoadingTemplate = () => {
  const location = useLocation();
  const { loading, setLoading } = useContext(NavigateContext);
  const { scrollBack } = useContext(ScrollContext);

  useEffect(() => {
    !loading && setLoading(true);
    scrollBack('instant');

    setTimeout(() => {
      loading && setLoading(false);
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return loading && <Loading />;
};
