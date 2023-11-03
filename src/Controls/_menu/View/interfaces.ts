export type TButtonType = 'burger' | 'dots';

export type TButtonSize = 's' | 'm' | 'l' |'xl' | 'container';

export interface IMenuProps {
    className?: string;
    onClick: () => void;
    buttonType: TButtonType;
    buttonSize: TButtonSize;
}
