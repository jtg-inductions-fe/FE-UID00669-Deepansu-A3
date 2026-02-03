import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';

import { LoginForm, LoginFormDataType } from '@components';
import { ERRORS, ROUTE_PATH } from '@constants';
import { setIsAuthenticated } from '@features';
import { useAppDispatch } from '@hooks';
import { useLoginMutation } from '@services';
import type { ApiErrorType } from '@types';

/**
 * Login Form Container
 */
export const LoginformContainer = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const to = (location.state as { from?: string })?.from || ROUTE_PATH.HOME;

    const [login] = useLoginMutation();

    const dispatch = useAppDispatch();

    const { control, handleSubmit } = useForm<LoginFormDataType>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onSubmit',
    });

    const [formSubmissionError, setFormSubmissionError] = useState('');

    const onSubmit = (formData: LoginFormDataType) => {
        login(formData)
            .unwrap()
            .then((response) => {
                // Stores access token after successful login
                dispatch(setIsAuthenticated(response.access));

                // Redirects user to target route (the one he came from / home)
                // Replaces history (to prevent navigating back to login)
                void navigate(to, { replace: true });
            })

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

    return (
        <LoginForm
            onSubmitHandler={handleSubmit(onSubmit)}
            control={control}
            submissionError={formSubmissionError}
        />
    );
};
