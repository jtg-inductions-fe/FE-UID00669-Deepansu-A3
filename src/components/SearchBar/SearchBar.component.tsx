import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from '@components/ComboBox';

import { SearchBarProps, SearchOption } from './SearchBar.types';

/**
 * Reusable search component
 */
export const SearchBar = <T extends object>({
    isLoading,
    elementsList,
    placeholder,
    onClick,
    onChange,
}: SearchBarProps<T>) => (
    <Combobox
        items={elementsList}
        itemToStringValue={(element: SearchOption<T>) => element.title}
        onValueChange={(element) => {
            if (element) {
                onClick(element);
            }
        }}
    >
        <ComboboxInput
            placeholder={placeholder}
            onChange={onChange}
            showLoading={isLoading}
        />

        <ComboboxContent side="bottom">
            {!isLoading && <ComboboxEmpty>No items found.</ComboboxEmpty>}
            <ComboboxList>
                {!isLoading &&
                    ((element: SearchOption) => (
                        <ComboboxItem key={element.key} value={element}>
                            {element.title}
                        </ComboboxItem>
                    ))}
            </ComboboxList>
        </ComboboxContent>
    </Combobox>
);
