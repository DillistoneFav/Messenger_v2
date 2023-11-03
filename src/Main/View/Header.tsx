import Menu from 'Controls/menu';
import { MENU_STYLE, MENU_BUTTON_SIZE } from "./Header/constants";

import type { IHeaderProps } from "./Header/interfaces";

function Header({
    className
}: IHeaderProps) {
    const onMenuClick = () => {
        debugger
    }

    return (
        <div className={className}>
            <Menu
                onClick={onMenuClick}
                buttonType={MENU_STYLE}
                buttonSize={MENU_BUTTON_SIZE}
            />
        </div>
    );
}

export default Header;
