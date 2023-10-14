import { Hamburger } from '@/components/atoms';

export const CollapsedMenu = () => {
  return (
    <aside className="collapsed-menu">
      <div className="collapsed-menu__hamburger">
        <Hamburger size={28} />
      </div>
    </aside>
  );
};
