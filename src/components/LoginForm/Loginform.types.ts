import { ComponentProps } from 'react';

import { type Control } from 'react-hook-form';

export interface LoginFormData {
    email: string;
    password: string;
}

export interface LoginFormProps extends ComponentProps<'form'> {
    onSubmitHandler: () => Promise<void>;
    control: Control<LoginFormData>;
}
