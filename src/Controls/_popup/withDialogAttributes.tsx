import { FunctionComponent } from 'react';

import './base/styles.scss';

const withDialogAttributes: (WrappedComponent: FunctionComponent) => () => JSX.Element = (WrappedComponent: FunctionComponent) => {
    return () => {
        return (
            <div className="modal">
                <div className="modal__backdrop"></div>
                <WrappedComponent />
            </div>
        )
    }
}

export default withDialogAttributes;
