import { useContext } from 'react';
import HamburgerReact from 'hamburger-react';

import { MenuContext } from '@/context';

export const Hamburger = () => {
  const { menu, setMenu } = useContext(MenuContext);

  return (
    <HamburgerReact
      size={45}
      toggled={menu}
      toggle={setMenu}
      direction="left"
      duration={0.4}
      color="white"
      rounded
    />
  );
};
