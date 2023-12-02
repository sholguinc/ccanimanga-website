import { useContext } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';

import { NavigateContext } from '@/context';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ImagesLoadedTemplate = ({ children }) => {
  const { setDelayedLoading } = useContext(NavigateContext);

  return (
    <OnImagesLoaded
      onLoaded={() => setDelayedLoading(false)}
      className="images-loaded-div"
    >
      {children}
    </OnImagesLoaded>
  );
};
