import { Link } from 'react-router-dom';

import { Text } from '@/components/atoms';
import { CollapsedMenu } from '@/components/organisms';
import { routes } from '@/data';

import CCAMLogo from '@/assets/logos/ccam-white.png';

export const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={CCAMLogo} alt="ccam-logo" />
      </figure>
      <ul className="header__routes">
        {routes.map((route, index) => (
          <li key={index} className="header__route">
            <Link to={route.path}>
              <Text
                size="larger"
                weight="semi-bold"
                transform="uppercase"
                family="figtree"
              >
                {route.name}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
      <CollapsedMenu />
    </header>
  );
};
