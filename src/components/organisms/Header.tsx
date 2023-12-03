import { Text, DelayLink } from '@/components/atoms';
import { CollapsedMenu } from '@/components/organisms';
import { routes } from '@/data';

import CCAMLogo from '@/assets/ccam.png';

export const Header = () => {
  return (
    <>
      <header className="header">
        <figure className="header__logo">
          <DelayLink to="/">
            <img src={CCAMLogo} alt="ccam-logo" loading="eager" />
          </DelayLink>
        </figure>
        <ul className="header__routes">
          {routes.map((route, index) => (
            <li key={index} className="header__route">
              <DelayLink to={route.path}>
                <Text
                  size="larger"
                  weight="bold-medium"
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
      </header>
      <CollapsedMenu />
    </>
  );
};
