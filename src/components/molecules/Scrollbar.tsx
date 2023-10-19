import { useContext } from 'react';
import SimpleBar from 'simplebar-react';

import { IChildren } from '@/models';
import { ScrollContext } from '@/context';

import 'simplebar/dist/simplebar.min.css';

export const Scrollbar = ({ children }: IChildren) => {
  const { scrollableNodeRef } = useContext(ScrollContext);

  return (
    <SimpleBar
      scrollableNodeProps={{ ref: scrollableNodeRef }}
      autoHide={true}
      style={{ maxHeight: '100vh' }}
      scrollbarMinSize={150}
    >
      {children}
    </SimpleBar>
  );
};
