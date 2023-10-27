import { MouseEventHandler, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { NavigateContext } from '@/context';
import { IDelayLink } from '@/models';

export const DelayLink = ({ children, className, ...props }: IDelayLink) => {
  const delay = 300;
  const navigate = useNavigate();
  const { setLoading } = useContext(NavigateContext);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate(props.to);
    }, delay);
  };

  return (
    <Link
      {...props}
      onClick={handleClick}
      className={`${className} delay-link`}
    >
      {children}
    </Link>
  );
};
