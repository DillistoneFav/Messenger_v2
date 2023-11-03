type TValue = string | number;

export interface IInputProps {
    value: TValue;
    onValueChanged: (value: TValue) => void;
    placeholder?: string;
}
