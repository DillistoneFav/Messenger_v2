import { useCallback, useState, useEffect } from "react";

import type { IResizerProps } from "./interfaces";

function View({
    className,
    onResize
}: IResizerProps) {
    const [isResizing, setIsResizing] = useState(false);

    const startResizing = useCallback((): void => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback((): void => {
        setIsResizing(false);
    }, []);

    const resize = useCallback((mouseMoveEvent: MouseEvent): void => {
        if (isResizing) {
            onResize(mouseMoveEvent.clientX);
        }
    }, [isResizing]);

    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);


    return (
        <div
            className={className}
            onMouseDown={startResizing}
        >
        </div>
    );
}

export default View;