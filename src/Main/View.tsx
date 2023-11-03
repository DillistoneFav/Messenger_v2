import { useCallback, useRef, useState } from 'react';
import Header from './View/Header';
import Resizer from 'Controls/resizer';
import { INITIAL_COLUMN_WIDTH } from "./View/constants";

import './View/styles.scss';

function View() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(INITIAL_COLUMN_WIDTH);

    const onResize = useCallback((width: number): void => {
        if (containerRef.current) {
            setWidth(width - containerRef.current.getBoundingClientRect().left);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: width
            }}
            onMouseDown={(event) => event.preventDefault()}
            className="mainColumn__content flex"
        >
            <div className="flex-grow-1">
                <Header className="mainColumn__header" />
                <div>tabs</div>
                <div>chat list</div>
            </div>
            <Resizer className="mainColumn__resizer" onResize={onResize} />
        </div>
    );
}

export default View;