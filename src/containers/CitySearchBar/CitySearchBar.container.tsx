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
import { setCity } from '@features';
import { useAppDispatch, useDebounce } from '@hooks';
import { useLazyCitiesListQuery } from '@services';
import { City } from '@types';

/**
 * City Search Bar / City Selector Container
 */
export const CitySearchBar = () => {
    const localCity = localStorage.getItem('city');
    const localCityId = localStorage.getItem('city_id');

    const dispatch = useAppDispatch();

    const [isCitySelectorOpen, setIsCitySelectorOpen] = useState(false);

    const [getCities, { data: cities, isSuccess, isLoading }] =
        useLazyCitiesListQuery();

    const [citiesList, setCitiesList] = useState<
        SearchOption<City>[] | undefined
    >(undefined);

    /**
     * Handles matching city list with the input value
     * and converts to object format that the reusable search component requires
     */
    const onCityInputChange = useDebounce(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (isSuccess) {
                setCitiesList(
                    cities
                        .filter((city) =>
                            city.name
                                .toLowerCase()
                                .startsWith(
                                    e.target.value.trim().toLowerCase(),
                                ),
                        )
                        .map((city) => ({
                            key: String(city.id),
                            title: city.name,
                            ...city,
                        })),
                );
            }
        },
    );

    /**
     * Handles action to perform to click of a city
     */
    const onCityClick = (city: SearchOption<City>) => {
        dispatch(setCity(city));
        localStorage.setItem('city', city.name);
        localStorage.setItem('city_id', String(city.id));
        setIsCitySelectorOpen(false);
    };

    useEffect(() => {
        // If local storage has no city
        // => Fetch cities and open the city selector dialog
        if (localCity && localCityId) {
            dispatch(setCity({ id: Number(localCityId), name: localCity }));
        } else {
            void getCities();
            setIsCitySelectorOpen(true);
        }
    }, [localCity, getCities, dispatch, localCityId]);

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
                <SearchBar<City>
                    isLoading={isLoading}
                    onChange={onCityInputChange}
                    placeholder="City"
                    onClick={(city) => onCityClick(city)}
                    elementsList={citiesList || []}
                />
            </DialogContent>
        </Dialog>
    );
};
