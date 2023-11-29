import { useContext } from 'react';

import { Hamburger, DelayLink, Text } from '@/components/atoms';
import { MenuContext } from '@/context';

import { routes } from '@/data';

export const CollapsedMenu = () => {
  const { menu, setMenu } = useContext(MenuContext);

  return (
    <div className="collapsed-menu__container">
      <div className={`collapsed-menu ${menu ? 'opened' : ''}`}>
        <ul className="collapsed-menu__routes">
          {routes.map((route, index) => (
            <li
              key={index}
              className="collapsed-menu__route"
              onClick={() => setMenu(false)}
            >
              <DelayLink to={route.path}>
                <Text
                  size="larger"
                  weight="bold-medium"
                  transform="uppercase"
                  family="figtree"
                  color="white"
                  className="collapsed-menu__route__text"
                >
                  {route.name}
                </Text>
              </DelayLink>
            </li>
          ))}
        </ul>
        <div className="collapsed-menu__hamburger">
          <Hamburger size={32} />
        </div>
      </div>
    </div>
  );
};
