import { useState } from 'react';

import { Eye, EyeClosed } from 'lucide-react';
import { Controller } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Typography } from '@components';
import { Glow } from '@ui_components';

import { LoginFormProps } from './Loginform.types';

export function LoginForm({
    className,
    onSubmitHandler,
    control,
    ...props
}: LoginFormProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form
            className={cn('flex flex-col gap-6 relative', className)}
            onSubmit={(e) => {
                e.preventDefault();
                void onSubmitHandler();
            }}
            {...props}
        >
            <Glow />
            <Glow className="right-0 bottom-0" />
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <Typography
                        tag="h1"
                        variant="h1"
                        className="text-2xl font-bold"
                    >
                        Log In
                    </Typography>
                    <Typography
                        variant="muted"
                        className="text-muted-foreground text-sm text-balance"
                    >
                        Shows are waiting for you
                    </Typography>
                </div>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel htmlFor="email">
                                <span>Email</span>
                                <span className="text-primary">*</span>
                            </FieldLabel>
                            <Input
                                {...field}
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                            />
                            {fieldState.error && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'PassWord must be atleast 8 charcters',
                        },
                        pattern: {
                            value: /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                            message:
                                'Password must contain a Number and a Special character ',
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel htmlFor="password">
                                <span>Password</span>
                                <span className="text-primary">*</span>
                            </FieldLabel>
                            <div className="relative">
                                <Input
                                    {...field}
                                    id="password"
                                    placeholder="password@here"
                                    type={showPassword ? 'text' : 'password'}
                                />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-primary"
                                    onClick={() =>
                                        setShowPassword((prev) => !prev)
                                    }
                                >
                                    {showPassword ? <Eye /> : <EyeClosed />}
                                </button>
                            </div>
                            {fieldState.error && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Field>
                    <Button type="submit" variant="destructive">
                        Login
                    </Button>
                </Field>
                <Field>
                    <FieldDescription className="text-center">
                        Don&apos;t have an account?{' '}
                        <a
                            href="/signup"
                            className="underline underline-offset-4 text-primary"
                        >
                            Sign up
                        </a>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
}
