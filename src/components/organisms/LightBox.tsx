import { useContext } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { ILightBox } from '@/models';
import { LightBoxContext } from '@/context';

export const LightBox = ({ slides }: ILightBox) => {
  const { open, setOpen } = useContext(LightBoxContext);

  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      plugins={[Fullscreen, Thumbnails, Zoom]}
      thumbnails={{ showToggle: true }}
      zoom={{
        maxZoomPixelRatio: 2,
      }}
      animation={{
        fade: 560,
      }}
      className="lightbox"
    />
  );
};
