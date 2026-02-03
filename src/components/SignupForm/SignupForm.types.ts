import { ComponentProps } from 'react';

import type { Control, UseFormGetValues } from 'react-hook-form';

/**
 * Defines the structure of signup form's data
 */
export interface SignupFormDataType {
    /**
     * Email field in signup form
     */
    email: string;

    /**
     * Name field in signup form
     */
    name: string;

    /**
     * Phone number field in signup form
     */
    phone: string;

    /**
     * Password field in signup form
     */
    password: string;

    /**
     * Confirm Password field in signup form
     */
    confirm_password: string;
}

/**
 * Props for the signup form
 * extended with html 'form' props
 */
export interface SignupFormProps extends ComponentProps<'form'> {
    /**
     * Submit handler function for the form
     */
    onSubmitHandler: () => Promise<void>;

    /**
     * Control (Controller for the form )
     */
    control: Control<SignupFormDataType>;

    /**
     * Submission error for the form
     */
    submissionError?: string;

    /**
     * Get values function to get current state/value of a field in the form
     */
    getValues: UseFormGetValues<SignupFormDataType>;
}
