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
import { EMAIL_REGEX, ERRORS, ROUTE_PATH } from '@constants';
import { useAuth } from '@hooks';
import type { ApiErrorType } from '@types';

import { LoginFormDataType } from './LoginForm.types';

/**
 * Login Form Container
 */
export const LoginFormContainer = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const to = (location.state as { from?: string })?.from || ROUTE_PATH.HOME;

    const {
        login: [login, { isLoading: isLoggingIn }],
    } = useAuth();

    const { control, handleSubmit } = useForm<LoginFormDataType>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onSubmit',
        disabled: isLoggingIn,
    });

    const [formSubmissionError, setFormSubmissionError] = useState('');

    const onSubmit = (formData: LoginFormDataType) => {
        login(formData)
            .unwrap()
            .then(() => void navigate(to, { replace: true }))

            // Catches any error thrown by the backend or the API call itself
            .catch((error: ApiErrorType<{ detail: string }>) => {
                // If no error data is returned
                // treat it is an unexpected server error => throw internal server error
                if (!error.data) {
                    throw new Error(ERRORS[500]);
                }

                // Show backend validation errors as FormSubmission errors (form level error)
                setFormSubmissionError(error.data.detail);
            })

            // Catch the rethrown error
            // Display a form level error
            .catch((error: Error) => {
                setFormSubmissionError(error.message);
            });
    };

    const [showPassword, setShowPassword] = useState(false);

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
                        Log In
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
                                placeholder="Enter email here"
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
                                    placeholder="Enter password here"
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
                <Field>
                    <Button
                        type="submit"
                        disabled={isLoggingIn}
                        variant="destructive"
                    >
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
