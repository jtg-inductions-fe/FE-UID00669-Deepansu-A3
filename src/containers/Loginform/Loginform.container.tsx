import { useForm } from 'react-hook-form';

import { LoginFormData } from '@/components/LoginForm/Loginform.types';
import { LoginForm } from '@components';

export const LoginformContainer = () => {
    const { control, handleSubmit, reset } = useForm<LoginFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onSubmit',
    });

    const onSubmit = (data: LoginFormData) => {
        reset();
        // eslint-disable-next-line
        console.log(data);
    };

    return (
        <LoginForm onSubmitHandler={handleSubmit(onSubmit)} control={control} />
    );
};
