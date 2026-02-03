import { LoginformContainer } from '@containers';

import MainImage from '/images/main_logo.webp';

/**
 * Login Page
 */
export default function LoginPage() {
    return (
        <main className="min-h-screen max-w-480 mx-auto flex flex-col justify-center">
            <section className="flex justify-center items-center">
                <div className="w-9/12 lg:w-1/4">
                    <LoginformContainer />
                </div>
                <div className="relative hidden lg:block w-1/2">
                    <img
                        src={MainImage}
                        alt="website logo"
                        className="w-full h-auto"
                    />
                </div>
            </section>
        </main>
    );
}
