import { ChangeEvent, useEffect, useState } from 'react';

import { ChevronDown } from 'lucide-react';

import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    SearchBar,
    SearchOption,
} from '@components';
import { useLazyCitiesListQuery } from '@services';

/**
 * City Search Bar / City Selector Container
 */
export const CitySearchBar = () => {
    const localCity = localStorage.getItem('city');

    const [isCitySelectorOpen, setIsCitySelectorOpen] = useState(false);

    const [getCities, { data: cities, isSuccess }] = useLazyCitiesListQuery();

    const [citiesList, setCitiesList] = useState<
        SearchOption[] | [] | undefined
    >(undefined);

    /**
     * Handles matching city list with the input value
     * and converts to object format that the reusable search component requires
     */
    const onCityInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (isSuccess) {
            setCitiesList(
                cities
                    .filter((city) =>
                        city.name
                            .toLowerCase()
                            .startsWith(e.target.value.toLowerCase()),
                    )
                    // The key is name , because the api response only include names
                    // Additionally it is guaranteed by backend that city name is unique
                    .map((city) => ({ key: city.name, title: city.name })),
            );
        }
    };

    /**
     * Handles action to perform to click of a city
     */
    const onCityClick = (city: SearchOption) => {
        localStorage.setItem('city', city.title);
        setIsCitySelectorOpen(false);
    };

    useEffect(() => {
        // If local storage has no city
        // => Fetch cities and open the city selector dialog
        if (!localCity) {
            void getCities();
            setIsCitySelectorOpen(true);
        }
    }, [localCity, getCities]);

    return (
        <Dialog
            open={isCitySelectorOpen}
            onOpenChange={(open) => {
                if (!open && localCity) setIsCitySelectorOpen(false);
            }}
        >
            <DialogTrigger asChild>
                <Button
                    aria-label="Open city selector"
                    size="lg"
                    onClick={() => {
                        void getCities();
                        setIsCitySelectorOpen(true);
                    }}
                >
                    {localCity ? (
                        <>
                            {localCity}
                            <ChevronDown />
                        </>
                    ) : (
                        <>Select City</>
                    )}
                </Button>
            </DialogTrigger>
            <DialogContent
                onInteractOutside={
                    localCity ? () => setIsCitySelectorOpen(false) : undefined
                }
                showCloseButton={false}
                className="top-1/10 w-1/2"
            >
                <DialogTitle hidden>Search City</DialogTitle>
                <SearchBar
                    onChange={onCityInputChange}
                    placeholder="City"
                    onClick={(city) => onCityClick(city)}
                    elementsList={citiesList}
                />
            </DialogContent>
        </Dialog>
    );
};
