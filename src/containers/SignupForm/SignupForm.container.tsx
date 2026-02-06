import { useState } from 'react';

import { Eye, EyeClosed } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';

import {
    Button,
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    Glow,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    Link,
    Typography,
} from '@components';
import {
    EMAIL_REGEX,
    ERRORS,
    PASSWORD_REGEX,
    PHONE_NUMBER_REGEX,
    ROUTE_PATH,
} from '@constants';
import { useAuth } from '@hooks';
import type { ApiErrorType } from '@types';

import { SignupFormDataType } from './SignupForm.types';

/**
 * Signup Form Container
 */
export const SignupFormContainer = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const to = (location.state as { from?: string })?.from || ROUTE_PATH.HOME;

    const {
        signup: [signup, { isLoading: isSigningUp }],
    } = useAuth();

    const { control, handleSubmit, getValues, setError } =
        useForm<SignupFormDataType>({
            defaultValues: {
                email: '',
                name: '',
                phone: '',
                password: '',
                confirm_password: '',
            },
            mode: 'onSubmit',
            disabled: isSigningUp,
        });

    const [formSubmissionError, setFormSubmissionError] = useState('');

    const onSubmit = (formData: SignupFormDataType) => {
        signup(formData)
            .unwrap()
            .then(() => void navigate(to, { replace: true }))

            // Catches if any error thrown by the backend or the API call itself
            .catch(
                (
                    error: ApiErrorType<{ email?: string[]; phone?: string[] }>,
                ) => {
                    // If no error data is returned
                    // treat it as unexpected server error => throw internal server error
                    if (!error.data) {
                        throw new Error(ERRORS[500]);
                    }

                    const errorData = error.data;

                    // Handle backend validation error for email
                    // (eg - email already exists)
                    if (errorData.email) {
                        setError('email', {
                            message: errorData.email[0], // Show first validation error
                        });
                    }

                    // Handle backend validation error for email
                    // (eg - invalid phone number)
                    else if (errorData.phone) {
                        setError('phone', {
                            message: errorData.phone[0], // Show first validation error
                        });

                        return;
                    }

                    // Fallback for other validation errors
                    else {
                        throw new Error(ERRORS[400]);
                    }
                },
            )

            // Catch the rethrown errors
            // display form level error message
            .catch((error: Error) => {
                setFormSubmissionError(error.message);
            });
    };
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form
            className="flex flex-col gap-6 relative"
            onSubmit={(e) => {
                e.preventDefault();
                void handleSubmit(onSubmit)();
            }}
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
                        {formSubmissionError && (
                            <FieldError
                                errors={[{ message: formSubmissionError }]}
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
                            value: EMAIL_REGEX,
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
                            value: PHONE_NUMBER_REGEX,
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
                            value: PASSWORD_REGEX,
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
                    <Button
                        type="submit"
                        variant="destructive"
                        disabled={isSigningUp}
                    >
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
