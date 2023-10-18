import { useContext } from 'react';
import HamburgerReact from 'hamburger-react';

import { IHamburger } from '@/models';
import { MainContext } from '@/context';

export const Hamburger = ({ size }: IHamburger) => {
  const { menu, setMenu } = useContext(MainContext);

  return (
    <HamburgerReact
      size={size}
      toggled={menu}
      toggle={setMenu}
      direction="left"
      duration={0.4}
      color="white"
      rounded
    />
  );
};
