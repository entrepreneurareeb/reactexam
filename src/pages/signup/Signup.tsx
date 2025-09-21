import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router"; 

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (name.trim().length <= 2) {
            setError("Name must be longer than 2 characters.");
            return false;
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }
         else if (password !== confirm) {
            setError("Passwords do not match.");
            return false;
        }
        else{
        setError(''); 
        return true;}
    };

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        if (validateForm()) {
            
            localStorage.setItem("isLoggedIn", "true");
            
            navigate('/')

            setName('');
            setEmail('');
            setPassword('');
            setConfirm('');
        }
    }

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Signup Page</title>
            <div className="flex min-h-screen">
                {/* Left side: Signup Form */}
                <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://baitussalam.org/images/logo-2.svg"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign up for your account
                        </h2>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        {/* Start of form tag */}
                        <form className="space-y-6" onSubmit={onSubmit}>
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/* Confirm Password Field */}
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type="password"
                                        value={confirm}
                                        onChange={(e) => setConfirm(e.target.value)}
                                        required
                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        {/* Additional Link */}
                        <p className="mt-6 text-center text-sm text-gray-500">
                            Already have an account?
                            <a
                                href="/login"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right side: Additional content (e.g., features or images) */}
                <div className="hidden items-center justify-center bg-indigo-100 lg:flex lg:w-1/2">
                    <div className="p-8 text-center">
                        <h3 className="mb-6 text-2xl font-bold text-gray-900">Why Join Us?</h3>
                        <p className="mb-4 text-lg text-gray-700">
                            Experience the best ecommerce app for all your needs.
                        </p>
                        <p className="mb-4 text-lg text-gray-700">
                            Get exclusive discounts and offers on your favorite products.
                        </p>
                        <p className="mb-4 text-lg text-gray-700">
                            Fast and secure checkout process tailored for you.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
