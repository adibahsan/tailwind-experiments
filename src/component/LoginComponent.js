import React from 'react';

const LoginComponent: React.FC = () => {
    return (
        <section className="min-h-screen flex items-stretch text-white">
            <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
                 style={{backgroundImage: "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)"}}>
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                    <p className="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
                </div>
                {/* Social icons */}
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
                 style={{backgroundColor: "#161616"}}>
                <div className="w-full py-6 z-20">
                    <h1 className="my-6">
                        {/* Logo SVG */}
                    </h1>
                    <div className="py-6 space-x-2">
                        {/* Social icons */}
                    </div>
                    <p className="text-gray-100">
                        or use your email account
                    </p>
                    <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div className="pb-2 pt-4">
                            <input type="email" name="email" id="email" placeholder="Email"
                                   className="block w-full p-4 text-lg rounded-sm bg-black"/>
                        </div>
                        <div className="pb-2 pt-4">
                            <input className="block w-full p-4 text-lg rounded-sm bg-black" type="password"
                                   name="password" id="password" placeholder="Password"/>
                        </div>
                        <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                            <a href="#">Forgot your password?</a>
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <button
                                className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign
                                in
                            </button>
                        </div>
                        {/* Mobile social icons */}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginComponent;
