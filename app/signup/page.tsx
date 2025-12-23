import Image from "next/image";

export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-0.5">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-2 bg-transparent rounded-2xl p-1 md:p-2">
                {/* Left Side */}
                <div className="flex flex-col items-center md:items-start justify-center gap-2 p-0.5 md:p-2">
                    <div className="w-full flex justify-center md:justify-start">
                        <Image src="/logo.png" alt="Basics Referee School Logo" width={260} height={180} className="rounded-md object-contain bg-black" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-1 text-center md:text-left">Create your account to get started</h2>
                    <p className="text-base md:text-lg text-cyan-100 text-center md:text-left max-w-md">Your adventure starts here. Register for camp and join a community of dreamers.</p>
                    <div className="flex flex-col gap-2 w-full mt-2">
                        <div className="flex items-start gap-3">
                            <span className="bg-cyan-900 text-cyan-300 rounded-full p-2"><svg xmlns='http://www.w3.org/2000/svg' className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87v-2a4 4 0 00-3-3.87m6 5.87a4 4 0 01-3-3.87m0 0V4a4 4 0 00-8 0v12a4 4 0 003 3.87" /></svg></span>
                            <div>
                                <span className="font-semibold text-white">Community Driven</span>
                                <div className="text-cyan-100 text-sm">Connect with trusted neighbours</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="bg-cyan-900 text-cyan-300 rounded-full p-2"><svg xmlns='http://www.w3.org/2000/svg' className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0a4 4 0 01-4-4V7a4 4 0 018 0v4a4 4 0 01-4 4z" /></svg></span>
                            <div>
                                <span className="font-semibold text-white">Safe & Secure</span>
                                <div className="text-cyan-100 text-sm">Verified Users and Secure Transactions</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="bg-cyan-900 text-cyan-300 rounded-full p-2"><svg xmlns='http://www.w3.org/2000/svg' className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1" /></svg></span>
                            <div>
                                <span className="font-semibold text-white">Instant Access</span>
                                <div className="text-cyan-100 text-sm">Get what you need , when you need it</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="bg-black bg-opacity-80 rounded-2xl p-4 flex flex-col gap-2 w-[90%] max-w-lg mx-auto border border-cyan-900">
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome</h2>
                    <p className="text-cyan-200 text-sm mb-2">Sign Up to your account or create a new one</p>
                    <div className="flex w-full mb-2 rounded-full bg-[#101828] p-1">
                        <button className="flex-1 py-2 rounded-full text-white font-semibold bg-[#101828] focus:outline-none">Login</button>
                        <button className="flex-1 py-2 rounded-full text-white font-semibold bg-cyan-500">Signup</button>
                    </div>
                    <form className="flex flex-col gap-1">
                        <label
                            className="text-white text-sm font-bold mb-0.5"
                            htmlFor="username">User Name</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="xyz123"
                            className="bg-[#101828] text-white rounded-md px-2 py-1 focus:outline-none text-sm" />
                        <label
                            className="text-white text-sm font-bold mb-0.5"
                            htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="bg-[#101828] text-white rounded-md px-2 py-1 focus:outline-none text-sm" />
                        <label
                            className="text-white text-sm font-bold mb-0.5"
                            htmlFor="contact">Contact Number</label>
                        <input
                            id="contact"
                            type="text"
                            placeholder="XXXX-XXXXXXX"
                            className="bg-[#101828] text-white rounded-md px-2 py-1 focus:outline-none text-sm" />
                        <label
                            className="text-white text-sm font-bold mb-0.5"
                            htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="............."
                            className="bg-[#101828] text-white rounded-md px-2 py-1 focus:outline-none text-sm" />
                        <label
                            className="text-white text-sm font-bold mb-0.5"
                            htmlFor="confirmpassword">Confirm Password</label>
                        <input
                            id="confirmpassword"
                            type="password"
                            placeholder="............."
                            className="bg-[#101828] text-white rounded-md px-2 py-1 focus:outline-none text-sm" />
                        <div
                            className="flex items-center gap-2 mt-1">
                            <input
                                type="checkbox"
                                id="remember"
                                className="accent-cyan-500" />
                            <label
                                htmlFor="remember"
                                className="text-cyan-200 text-xs">Remember Me</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-cyan-500 text-white font-semibold py-1.5 rounded-md mt-1">Sign Up</button>
                        <div
                            className="flex items-center gap-2 mt-1">
                            <input
                                type="checkbox"
                                id="terms"
                                className="accent-cyan-500" />
                            <label
                                htmlFor="terms"
                                className="text-cyan-200 text-xs">Yes, I agree to the
                                <a href="#" className="underline">terms and services</a></label>
                        </div>
                    </form>
                    <div className="flex flex-col gap-1 mt-1">
                        <div className="flex items-center gap-2">
                            <span className="flex-1 h-px bg-cyan-900" />
                            <span className="text-cyan-200 text-xs">Or Continue With</span>
                            <span className="flex-1 h-px bg-cyan-900" />
                        </div>
                        <div className="flex gap-3">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-[#101828] text-white rounded-md py-2 border border-cyan-900">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.805 10.023h-9.765v3.953h5.617c-.241 1.241-1.484 3.648-5.617 3.648-3.375 0-6.133-2.789-6.133-6.242s2.758-6.242 6.133-6.242c1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.711-1.57-3.922-2.539-6.656-2.539-5.523 0-10 4.477-10 10s4.477 10 10 10c5.742 0 9.547-4.031 9.547-9.711 0-.652-.07-1.148-.156-1.357z" /></svg>
                                Google
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-[#101828] text-white rounded-md py-2 border border-cyan-900">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 1.43c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8zm-4.365.8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365-.8c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8zm8.73 2.57c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365.8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365-.8c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8zm8.73 2.57c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365.8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365-.8c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8zm8.73 2.57c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365.8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365-.8c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8zm8.73 2.57c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365.8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365-.8c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8zm8.73 2.57c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365.8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4.365-.8c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8z" /></svg>
                                Apple
                            </button>
                        </div>
                    </div>
                    <div className="text-cyan-200 text-xs text-center mt-2">Already Have An Account ? <a href="#" className="underline">Sign In</a></div>
                </div>
            </div>
        </div>
    );
}
