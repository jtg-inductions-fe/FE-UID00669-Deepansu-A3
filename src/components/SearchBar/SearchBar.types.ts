import { ChangeEvent } from 'react';

/**
 * Type for options passed to the search component
 */
export type SearchOption<T extends object = object> = {
    /**
     * Key of the search option
     */
    key: string;

    /**
     * Title to show in the search options
     */
    title: string;
} & T;

/**
 * Type for props that can be passed to the search bar
 */
export type SearchBarProps<T extends object = object> = {
    /**
     * Event handler when a user writes something in the input
     */
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    /**
     * Function to execute when a user clicks on any option
     */
    onClick: (element: SearchOption<T>) => void;

    /**
     * Placeholder to show in search input
     */
    placeholder: string;

    /**
     * List of elements to show in search options
     */
    elementsList: SearchOption<T>[];

    /**
     * Flag for whether new data is being loaded in search options or not
     */
    isLoading: boolean;
};
