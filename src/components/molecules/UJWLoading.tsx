import { useContext } from 'react';

import { Loading } from '@/components/atoms';
import { UJWContext } from '@/context';

export const UJWLoading = () => {
  const { loading } = useContext(UJWContext);

  return (
    loading && (
      <Loading
        backgroundColor="rgba(0, 0, 0, .6)"
        text="Loading gallery . . ."
      />
    )
  );
};
