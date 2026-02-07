import { ChangeEvent } from 'react';

export type SearchOption<T extends object = object> = {
    key: string;
    title: string;
} & T;

export type SearchBarProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (element: SearchOption) => void;
    placeholder: string;
    elementsList?: SearchOption[];
};
