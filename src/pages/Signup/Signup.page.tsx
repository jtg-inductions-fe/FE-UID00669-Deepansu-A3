import { SignupFormContainer } from '@containers';
import MainImage from '@images/main_logo.webp';

/**
 * Signup Page
 */
export default function SignupPage() {
    return (
        <main className="min-h-screen max-w-480 mx-auto flex flex-col justify-center">
            <section className="flex justify-center items-center">
                <div className="w-9/12 lg:w-1/4">
                    <SignupFormContainer />
                </div>
                <div className="relative hidden lg:block w-[45%]">
                    <img
                        src={MainImage}
                        alt="website logo"
                        className="w-full h-auto"
                        aria-hidden={true}
                    />
                </div>
            </section>
        </main>
    );
}
