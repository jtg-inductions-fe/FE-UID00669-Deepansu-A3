import { ComponentProps } from 'react';

import { type Control } from 'react-hook-form';

/**
 * Defines the structure of login form's data
 */
export interface LoginFormDataType {
    /**
     * Email field in login form
     */
    email: string;

    /**
     * Password field in login form
     */
    password: string;
}

/**
 * Props for the login form
 * extended with html 'form' props
 */
export interface LoginFormProps extends ComponentProps<'form'> {
    /**
     * Submit handler function for the form
     */
    onSubmitHandler: () => Promise<void>;

    /**
     * Control (Controller for the form
     */
    control: Control<LoginFormDataType>;

    /**
     * Submission error for the form
     */
    submissionError?: string;
}
