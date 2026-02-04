import { Search } from 'lucide-react';

import { Button } from '@components/Button';
import { ButtonGroup } from '@components/ButtonGroup';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@components/InputGroup';

import { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({
    elementsList,
    placeholder,
    onClick,
    onChange,
}: SearchBarProps) => (
    <div className="relative">
        <InputGroup variant="primary">
            <InputGroupInput
                id="searchbar"
                type="text"
                onChange={(e) => onChange(e)}
                placeholder={`Search ${placeholder}`}
            />
            <InputGroupAddon align="inline-start">
                <Search />
            </InputGroupAddon>
        </InputGroup>
        {elementsList && (
            <ButtonGroup
                orientation="vertical"
                className="max-h-100 overflow-y-auto scrollbar-stable absolute mt-5 gap-1 w-full [&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg"
            >
                {elementsList.length > 0 ? (
                    elementsList.map((element, index) => (
                        <Button
                            key={index}
                            onClick={() => onClick(element)}
                            variant="default"
                            className="justify-start"
                        >
                            {element.title}
                        </Button>
                    ))
                ) : (
                    <Button variant="default" className="justify-start">
                        No such {placeholder} exists
                    </Button>
                )}
            </ButtonGroup>
        )}
    </div>
);
