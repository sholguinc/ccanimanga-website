import React, { createContext, useState } from 'react';

import { IMenuContext, IChildren, MenuContextType } from '@/models';

const defaultValue = {
    menu: false,
};

export const MenuContext: MenuContextType = createContext<IMenuContext>(defaultValue as IMenuContext);

export function MenuContextProvider({ children }: IChildren) {
    const scrollableNodeRef = React.createRef<HTMLDivElement>();
    const [menu, setMenu] = useState(false);

    const openMenu = (): void => {
        setMenu(!menu);
    };

    return (
        <MenuContext.Provider
            value={{
                menu,
                setMenu,
                openMenu,
                scrollableNodeRef,
            }}
        >
            { children }
        </MenuContext.Provider>
    );
}
