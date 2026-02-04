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

import { SignupFormProps } from './SignupForm.types';

/**
 * Signup form component
 * @param props - {@link SignupFormProps}
 */
export const SignupForm = ({
    className,
    onSubmitHandler,
    getValues,
    control,
    submissionError,
    ...props
}: SignupFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                        Sign Up
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
                    name="name"
                    control={control}
                    rules={{
                        required: 'Name is required',
                    }}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel htmlFor="name">
                                <span>Name</span>
                                {fieldState.error && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </FieldLabel>
                            <Input
                                {...field}
                                id="name"
                                type="text"
                                placeholder="Alice"
                            />
                        </Field>
                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    rules={{
                        required: 'Phone Number is required',
                        pattern: {
                            value: /^\+?1?\d{9,15}$/,
                            message: 'Enter a valid phone number',
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel htmlFor="phone">
                                <span>Phone Number</span>
                                {fieldState.error && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </FieldLabel>
                            <Input
                                {...field}
                                id="phone"
                                type="text"
                                placeholder="+919999999999"
                            />
                        </Field>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 7,
                            message: 'Password must be atleast 7 characters',
                        },
                        pattern: {
                            value: /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                            message:
                                'Must include a number, a character and a symbol',
                        },
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
                                        aria-label={
                                            showPassword
                                                ? 'Hide password'
                                                : 'Show password'
                                        }
                                        aria-pressed={showPassword}
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
                <Controller
                    name="confirm_password"
                    control={control}
                    rules={{
                        required: 'Confirm Password is required',
                        validate: (value) =>
                            value === getValues('password') ||
                            'Password do not match',
                    }}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel htmlFor="confirm_password">
                                <span>Confirm Password</span>
                                {fieldState.error && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    id="confirm_password"
                                    type={
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    placeholder="Enter password again"
                                    {...field}
                                />
                                <InputGroupAddon align="inline-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer"
                                        aria-label={
                                            showConfirmPassword
                                                ? 'Hide confirm password'
                                                : 'Show confirm password'
                                        }
                                        aria-pressed={showConfirmPassword}
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (prev) => !prev,
                                            )
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <Eye />
                                        ) : (
                                            <EyeClosed />
                                        )}
                                    </button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>
                    )}
                />
                <Field>
                    <Button type="submit" variant="destructive">
                        Sign Up
                    </Button>
                </Field>
                <Field>
                    <FieldDescription className="text-center">
                        Have an account?{' '}
                        <Link to={ROUTE_PATH.LOGIN}>Log In</Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
};
