import { X } from 'lucide-react';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    ButtonGroup,
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
    Empty,
    EmptyDescription,
    EmptyError,
    EmptyFooter,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Skeleton,
    Typography,
} from '@components';
import { ROUTE_PATH } from '@constants';
import { useAuth, useIsMobile } from '@hooks';
import { useProfileDetailsQuery } from '@services';

/**
 * User Profile container
 */
export const UserProfile = () => {
    const isMobile = useIsMobile();

    const {
        data: user,
        isError: isErrorInProfileFetching,
        isLoading: isProfileFetching,
    } = useProfileDetailsQuery();

    const {
        logout: [logout, { isError: isErrorInLogout }],
    } = useAuth();

    if (isProfileFetching) {
        return (
            <Avatar size="lg">
                <AvatarFallback>
                    <Skeleton />
                </AvatarFallback>
            </Avatar>
        );
    }

    if (isErrorInProfileFetching) {
        return (
            <Button
                size="lg"
                variant={isMobile ? 'secondary' : 'destructive'}
                className={isMobile ? '' : 'rounded-full'}
                asLink
                to={ROUTE_PATH.LOGIN}
            >
                Log In
            </Button>
        );
    }

    return (
        <Popover>
            <PopoverTrigger>
                <Avatar size="lg">
                    <AvatarImage src="https://picsum.photos/100/100" />
                </Avatar>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-65">
                <div className="flex flex-col items-center gap-4">
                    <Avatar className="w-25 h-25">
                        <AvatarImage src="https://picsum.photos/100/100" />
                    </Avatar>
                    <div className="text-center">
                        <Typography>{user?.name}</Typography>
                        <Typography>{user?.email}</Typography>
                    </div>
                    <ButtonGroup
                        orientation="vertical"
                        className="gap-1 w-full"
                    >
                        <Button
                            size="lg"
                            asLink
                            to={ROUTE_PATH.PROFILE}
                            variant="secondary"
                        >
                            Profile
                        </Button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" variant="secondary">
                                    Logout
                                </Button>
                            </DialogTrigger>
                            <DialogContent
                                showCloseButton={false}
                                className="bg-transparent"
                            >
                                <Empty>
                                    <EmptyHeader>
                                        <EmptyMedia>
                                            <X size={48} />
                                        </EmptyMedia>
                                        <EmptyTitle>Logout ?</EmptyTitle>
                                        <EmptyDescription>
                                            Are you sure you want to logout?
                                            This action cannot be undone.
                                        </EmptyDescription>
                                        {isErrorInLogout && (
                                            <EmptyError>
                                                Logout Failed
                                            </EmptyError>
                                        )}
                                    </EmptyHeader>
                                    <EmptyFooter>
                                        <DialogClose asChild>
                                            <Button className="rounded-lg">
                                                Stay Logged In
                                            </Button>
                                        </DialogClose>
                                        <Button
                                            variant="destructive"
                                            onClick={() => void logout()}
                                        >
                                            Yes. Logout
                                        </Button>
                                    </EmptyFooter>
                                </Empty>
                            </DialogContent>
                        </Dialog>
                    </ButtonGroup>
                </div>
            </PopoverContent>
        </Popover>
    );
};
