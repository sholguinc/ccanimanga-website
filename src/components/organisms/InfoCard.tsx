import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

import { Button, Text } from '@/components/atoms';

import { IInfoCard } from '@/models';

export const InfoCard = ({
  title,
  text,
  image,
  imageTransform = '',
  to,
  reverse = false,
  className = '',
}: IInfoCard) => {
  const options = {
    initialInView: false,
    threshold: 0.6,
    triggerOnce: true,
  };

  const { ref: circleRef, inView } = useInView(options);
  const reverseCard = reverse ? 'reverse' : '';

  const getMotionDivProps = (reverse: boolean): MotionProps => {
    const initTranslate = reverse ? '150vw' : '-150vw';

    return {
      initial: { x: initTranslate },
      animate: { x: 0 },
      transition: {
        type: 'spring',
        mass: 1.6,
        stiffness: 90,
        damping: 16,
      },
    };
  };

  return (
    <div className={`info-card__wrapper ${className}`}>
      <div className={`info-card ${reverseCard}`}>
        <div className="info-card__content">
          <Text
            size="custom"
            color="black"
            weight="semi-bold"
            family="hiro-misake"
            className="info-card__title"
          >
            {title}
          </Text>
          <Text size="custom" className="info-card__description">
            {text}
          </Text>
          {to && (
            <Button to={to} size="xx-large" className="info-card__button" />
          )}
        </div>
        <div className="info-card__figure">
          <div className="info-card__circle-container" ref={circleRef}>
            <div className="info-card__circle" />
          </div>
          <div className="info-card__image-container">
            <AnimatePresence>
              {inView && (
                <motion.div
                  className="info-card__image-movement"
                  {...getMotionDivProps(reverse)}
                >
                  <img
                    src={image}
                    alt={title}
                    className="info-card__image"
                    style={{ transform: imageTransform }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
