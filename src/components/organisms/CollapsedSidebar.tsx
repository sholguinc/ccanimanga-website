import { Hamburger } from '@/components/atoms';

export const CollapsedSidebar = () => {
  return (
    <aside className="collapsed-sidebar">
      <div className="collapsed-sidebar__hamburger">
        <Hamburger size={28} />
      </div>
    </aside>
  );
};
