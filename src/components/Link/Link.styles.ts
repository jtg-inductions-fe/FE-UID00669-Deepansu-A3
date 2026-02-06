import { cva } from 'class-variance-authority';

export const linkVariants = cva('flex justify-center items-center', {
    variants: {
        variant: {
            default: 'text-foreground',
            primary: 'underline underline-offset-4 text-primary',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});
