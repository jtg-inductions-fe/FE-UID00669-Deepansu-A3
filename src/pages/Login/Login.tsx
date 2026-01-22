import { LoginformContainer } from '@containers';

export const Login = () => (
    <div className="h-screen overflow-y-hidden max-w-480 mx-auto">
        <div className="flex justify-center items-center h-full">
            <div className="w-9/12 lg:w-1/4">
                <LoginformContainer />
            </div>
            <div className="relative hidden lg:block w-1/2">
                <img
                    src="/images/main_logo.webp"
                    alt="website logo"
                    className="w-full h-auto"
                />
            </div>
        </div>
    </div>
);
