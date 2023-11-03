import { useMemo } from 'react';
import { IMenuProps } from "./View/interfaces";
import cn from 'classnames';

import './View/styles.scss';

function View({
    className,
    onClick,
    buttonType,
    buttonSize
}: IMenuProps) {
    return (
        <button
            className={cn(className, `menu-size_${buttonSize}`, 'menu')}
            onClick={onClick}
        >
            <span className={cn('menu-element', `menu-element_${buttonType}`)}></span>
            <span className={cn('menu-element', `menu-element_${buttonType}`)}></span>
            <span className={cn('menu-element', `menu-element_${buttonType}`)}></span>
        </button>
    );
}

export default View;
