import { ChangeEvent } from 'react';

import type { IInputProps } from "./View/interfaces";

function View({
    value,
    placeholder,
    onValueChanged
}: IInputProps) {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        onValueChanged(event.target.value)
    }

    return (
        <input
            value={value}
            onChange={onChange}
        />
    );
}

export default View;
