import { Text, DelayLink } from '@/components/atoms';
import { CollapsedMenu } from '@/components/organisms';
import { headerRoutes } from '@/data';

import CCAMLogo from '/public/logos/ccam-white.png';

export const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={CCAMLogo} alt="ccam-logo" />
      </figure>
      <ul className="header__routes">
        {headerRoutes.map((route, index) => (
          <li key={index} className="header__route">
            <DelayLink to={route.path}>
              <Text
                size="larger"
                weight="semi-bold"
                transform="uppercase"
                family="figtree"
                color="white"
              >
                {route.name}
              </Text>
            </DelayLink>
          </li>
        ))}
      </ul>
      <CollapsedMenu />
    </header>
  );
};
