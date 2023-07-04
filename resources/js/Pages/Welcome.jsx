import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import ApplicationLogo from "@/SVGs/ApplicationLogo";
import SecondaryButton from "@/Components/SecondaryButton";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import CoinCountingIllustration from "@/SVGs/CoinCountingIllustration";

export default function Welcome(props) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-white">
                <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/a">
                                        <ApplicationLogo className="w-full h-5" />
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <a href={route("login")}>
                                        <SecondaryButton>
                                            Log in
                                        </SecondaryButton>
                                    </a>
                                </div>
                                <div className="ml-3 relative">
                                    <a href={route("register")}>
                                        <SecondaryButton>
                                            Register
                                        </SecondaryButton>
                                    </a>
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="py-1 border-t border-gray-200 dark:border-gray-600">
                            <div className="space-y-1">
                                <ResponsiveNavLink href={route("login")}>
                                    Log in
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route("register")}>
                                    Register
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>
                <main>
                    <div className="mt-16">
                        <div className="py-24 max-w-7xl mx-auto flex flex-col sm:flex-row">
                            <div className="container mb-8 flex flex-col justify-center items-center">
                                <h2 className="font-itc dark:text-white font-bold tracking-tighter leading-tight text-5xl text-center">
                                    Streamline your finances.
                                </h2>
                                <h5 className="dark:text-white font-bold tracking-tighter leading-tight text-2xl text-center">
                                    <span className="whitespace-nowrap">
                                        Manage &#x1F4B0;,Track &#128200;, &
                                    </span>{" "}
                                    <span className="whitespace-nowrap">
                                        Prosper &#127811;
                                    </span>
                                </h5>
                            </div>
                            <div className="container mb-8 flex justify-center items-center">
                                <CoinCountingIllustration className="w-72" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
