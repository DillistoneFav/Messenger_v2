import { ReactElement } from "react";
import withDialogAttributes from "./withDialogAttributes";

import './Dialog/styles.scss';

function Dialog(): ReactElement {
    return (
        <div className="dialog">kinda dialog</div>
    );
}

export default withDialogAttributes(Dialog);
