import { ReactNode } from 'react';

export type EmptyProps = {
    icon: ReactNode;
    heading: string;
    description: string;
    detailsComponent?: ReactNode;
    footer: ReactNode;
};
