import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { ILightBox } from '@/models';
import { LightBoxContext } from '@/context';

export const LightBox = ({ slides }: ILightBox) => {
  const { index, open, setOpen } = useContext(LightBoxContext);

  return (
    <Lightbox
      open={open}
      index={index}
      close={() => setOpen(false)}
      slides={slides}
      plugins={[Fullscreen, Thumbnails, Zoom]}
      thumbnails={{ showToggle: true }}
      zoom={{
        maxZoomPixelRatio: 2,
      }}
      animation={{
        fade: 600,
        swipe: 360,
      }}
      carousel={{
        padding: '20px',
      }}
      className="lightbox"
      render={{
        iconPrev: () => (
          <FontAwesomeIcon icon={faAngleLeft} className="lightbox__angle" />
        ),
        iconNext: () => (
          <FontAwesomeIcon icon={faAngleRight} className="lightbox__angle" />
        ),
      }}
    />
  );
};
