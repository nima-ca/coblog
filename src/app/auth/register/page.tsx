import RegisterForm from "./(components)/registerForm";

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center flex-col py-52">
            <h1 className="text-4xl font-black mb-2">Welcome to Coblog!</h1>
            <p className="max-w-[40rem] mb-10 text-center">
                Join our community of passionate programmers and stay up-to-date
                with the latest in coding, tech trends, and software
                development. Register now to start sharing your thoughts and
                learn from fellow developers.
            </p>

            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
