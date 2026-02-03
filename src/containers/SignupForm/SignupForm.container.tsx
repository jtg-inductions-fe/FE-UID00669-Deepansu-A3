import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';

import { SignupForm, SignupFormDataType } from '@components';
import { ERRORS, ROUTE_PATH } from '@constants';
import { setIsAuthenticated } from '@features';
import { useAppDispatch } from '@hooks';
import { useSignupMutation } from '@services';
import type { ApiErrorType } from '@types';

/**
 * Signup Form Container
 */
export const SignupFormContainer = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const to = (location.state as { from?: string })?.from || ROUTE_PATH.HOME;

    const [signup] = useSignupMutation();

    const dispatch = useAppDispatch();

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
        });

    const [formSubmissionError, setFormSubmissionError] = useState('');

    const onSubmit = (formData: SignupFormDataType) => {
        // Trigger signup API call
        signup(formData)
            .unwrap()
            .then((response) => {
                // Stores access token after successful signup
                dispatch(setIsAuthenticated(response.access));

                // Redirects user to target route (the one he came from / home)
                // Replaces history (to prevent navigating back to signup)
                void navigate(to, { replace: true });
            })

            // Catches if any error thrown by the backend or the API call itself
            .catch((error: ApiErrorType<{ email: string[] }>) => {
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
            })

            // Catch the rethrown errors
            // display form level error message
            .catch((error: Error) => {
                setFormSubmissionError(error.message);
            });
    };

    return (
        <SignupForm
            onSubmitHandler={handleSubmit(onSubmit)}
            control={control}
            submissionError={formSubmissionError}
            getValues={getValues}
        />
    );
};
