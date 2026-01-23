import { useState } from 'react';

import { Eye, EyeClosed } from 'lucide-react';
import { Controller } from 'react-hook-form';

import { Button } from '@components/Button';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from '@components/Field';
import { Glow } from '@components/Glow';
import { Input } from '@components/Input';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@components/InputGroup';
import { Link } from '@components/Link';
import { Typography } from '@components/Typography';
import { ROUTE_PATH } from '@constants';
import { cn } from '@utils';

import { LoginFormProps } from './Loginform.types';

export const LoginForm = ({
    className,
    onSubmitHandler,
    control,
    submissionError,
    ...props
}: LoginFormProps) => {
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
                    <div className="h-5">
                        {submissionError && (
                            <FieldError
                                errors={[{ message: submissionError }]}
                            />
                        )}
                    </div>
                </div>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email is invalid',
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel htmlFor="email">
                                <span>Email</span>
                                {fieldState.error && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </FieldLabel>
                            <Input
                                {...field}
                                id="email"
                                type="email"
                                placeholder="test@example.com"
                            />
                        </Field>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: 'Password is required',
                    }}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel htmlFor="password">
                                <span>Password</span>
                                {fieldState.error && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter password"
                                    {...field}
                                />
                                <InputGroupAddon align="inline-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                    >
                                        {showPassword ? <Eye /> : <EyeClosed />}
                                    </button>
                                </InputGroupAddon>
                            </InputGroup>
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
                        <Link to={ROUTE_PATH.SIGNUP}>Sign Up</Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
};
