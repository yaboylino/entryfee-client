import * as React from 'react'
import Link from "next/link";

interface NavLink {
    name: string;
    slug: string;
}

const links: NavLink[] = [
    {name: "home", slug: "/"},
    {name: "shop", slug: "/shop"},
    {name: "contact", slug: "/contact"},
]


const Navbar = () => (
    <section className="bg-two relative">
        <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                       href="#">Brand</a>
                </div>

                <div className="flex lg:hidden">
                    <button type="button"
                            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd"
                                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
                <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
                   href="#">Home</a>
                <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
                   href="#">Components</a>
                <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
                   href="#">Pricing</a>
                <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
                   href="#">Contact</a>
                <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
                   href="#">FAQ</a>
            </div>

            <a className="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto"
               href="#">
                Entry free aanvragen
            </a>
        </nav>

        <div
            className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-bold tracking-wide lg:text-5xl text-five">
                        Suriname Entry Fee
                    </h1>
                    <span className="text-xl mt-8 text-white font-medium">Goedkoopste Entry Fee Suriname van Nederland voor slechts €53,90!</span>

                    <div className="mt-8 space-y-5">
                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-yellow-300" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                            <span className="mx-2">Clean and Simple Layout</span>
                        </p>

                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-yellow-300" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                            <span className="mx-2">Just Copy Paste Codeing</span>
                        </p>

                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-yellow-300" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                            <span className="mx-2">Easy to Use</span>
                        </p>
                    </div>
                </div>

                <div
                    className="grid grid-cols-2 w-full mt-8 bg-transparent rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                    <a className="block h-10 px-2 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 w-full"
                       href="#">
                        Entry free aanvragen
                    </a>
                    <a className="ml-4 block h-10 px-2 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md bg-white lg:mt-0 hover:bg-gray-100 w-full"
                       href="#">
                        Veel gestelde vragen
                    </a>
                </div>
            </div>

            <div className="flex items-center justify-center w-full right-0 lg:w-1/3 absolute bottom-0 lg:right-20 xl:right-40 bg-white rounded-tl-full rounded-tr-full pt-8">
                <img className="object-cover h-full mx-auto rounded-md hero-image"
                     src="/assets/images/hero.png"
                     alt="holiday girl"/>
            </div>
        </div>
    </section>
)

export default Navbar
