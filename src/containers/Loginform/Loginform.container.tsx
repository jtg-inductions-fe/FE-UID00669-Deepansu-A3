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

    const onSubmit = async (formData: LoginFormDataType) => {
        await login(formData)
            .unwrap()
            .then((response) => {
                dispatch(setIsAuthenticated(response.access));
                void navigate(to, { replace: true });
            })
            .catch((error: ApiErrorType) => {
                setFormSubmissionError(error.data.detail);
            })
            .catch(() => {
                setFormSubmissionError(ERRORS[500]);
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
