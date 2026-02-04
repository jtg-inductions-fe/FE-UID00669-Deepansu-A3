import { type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { Separator } from '@components/Seperator';
import { cn } from '@utils';

import { buttonGroupVariants } from './ButtonGroup.styles';

export const ButtonGroup = ({
    className,
    orientation,
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>) => (
    <div
        role="group"
        data-slot="button-group"
        data-orientation={orientation}
        className={cn(buttonGroupVariants({ orientation }), className)}
        {...props}
    />
);

export const ButtonGroupText = ({
    className,
    asChild = false,
    ...props
}: React.ComponentProps<'div'> & {
    asChild?: boolean;
}) => {
    const Comp = asChild ? Slot.Root : 'div';

    return (
        <Comp
            className={cn(
                "bg-muted gap-2 rounded-lg border px-2.5 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none",
                className,
            )}
            {...props}
        />
    );
};

export const ButtonGroupSeparator = ({
    className,
    orientation = 'vertical',
    ...props
}: React.ComponentProps<typeof Separator>) => (
    <Separator
        data-slot="button-group-separator"
        orientation={orientation}
        className={cn(
            'bg-input relative self-stretch data-[orientation=horizontal]:mx-px data-[orientation=horizontal]:w-auto data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto',
            className,
        )}
        {...props}
    />
);
