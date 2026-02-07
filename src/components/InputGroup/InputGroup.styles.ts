import { cva } from 'class-variance-authority';

export const inputGroupAddonVariants = cva(
    "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
    {
        variants: {
            align: {
                'inline-start':
                    'pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first',
                'inline-end':
                    'pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last',
                'block-start':
                    'px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start',
                'block-end':
                    'px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start',
            },
        },
        defaultVariants: {
            align: 'inline-start',
        },
    },
);

export const inputGroupVariants = cva(
    'has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-9 rounded-lg border transition-colors has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot][aria-invalid=true]]:ring-[3px] has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 [[data-slot=combobox-content]_&]:focus-within:border-inherit [[data-slot=combobox-content]_&]:focus-within:ring-0 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto',
    {
        variants: {
            variant: {
                default: 'border-input dark:bg-input/30 ',
                primary: 'border-primary bg-primary/30 dark:bg-primary/30',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);
