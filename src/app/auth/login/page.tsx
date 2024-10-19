import LoginForm from "./(components)/loginForm";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center flex-col py-52">
            <h1 className="text-4xl font-black mb-2">
                Welcome Back to Coblog!
            </h1>
            <p className="max-w-[40rem] mb-10 text-center">
                Log in to continue your coding journey, connect with fellow
                developers, and stay updated with the latest programming
                insights.
            </p>

            <LoginForm />
        </div>
    );
};

export default LoginPage;
