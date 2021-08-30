import Link from 'next/link';
import { useEffect } from 'react';
import Footer from '../Footer'

export default function index({ children }) {

    const selectedTheme = (val) => {
        localStorage.setItem('theme', val)

        const html = document.querySelector('html')

        html.classList.add(localStorage.getItem('theme'))
        if (val === 'dark') {
            html.classList.remove('light')
        } else {
            html.classList.remove('dark')
        }
    }

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [])


    return (
        <div>
            <div className="dark:bg-gray-900">
                <div className="grid md:grid-cols-5 font-body">
                    <div className="md:col-span-1">
                        <nav className="py-4 px-5 h-full bg-white-200 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 text-white hidden md:flex flex-col justify-start font-sans">
                            <h1 className="uppercase font-bold text-gray-700 dark:text-red-500 text-xl text-left ml-2 mb-6" >Tailwindcss by D2Y</h1>

                            <div className="flex flex-col justify-start">
                                <Link href="/">
                                    <a className="text-left my-2 font-semibold py-2 hover:bg-red-600 bg-red-500 w-full rounded px-24 focus:ring-4 ring-red-500
                                ">Home</a>
                                </Link>
                                <Link href="/colors">
                                    <a className="text-left my-2 font-semibold py-2 hover:bg-red-600 bg-red-500 w-full rounded px-24 focus:ring-4 ring-red-500">Colors</a>
                                </Link>


                            </div>
                        </nav>
                    </div>

                    <main className="md:col-span-4 w-full mx-auto text-gray-600 dark:text-gray-200 mb-20">
                        <div className="flex justify-between items-center p-4 shadow-lg">
                            <div className="inline-flex">
                                <h2 className="font-semibold mr-3 mt-1 hidden md:block">Light/Dark Mode</h2>
                                <button onClick={() => selectedTheme('light')} className="w-8 h-8 rounded-full border border-gray-800 bg-gray-100 mr-2"></button>

                                <button onClick={() => selectedTheme('dark')} className="w-8 h-8 rounded-full border bg-black"></button>
                            </div>
                            <div className="inline-flex">
                                <div className="px-4 items-center flex uppercase font-semibold text-sm py-1 text-white rounded bg-red-500 mx-2"><Link href="/"><a>Login</a></Link></div>
                                <div className="px-2 items-center flex uppercase font-semibold text-sm py-1 text-white rounded bg-red-500 mx-2"><Link href="/"><a>Register</a></Link></div>
                            </div>
                        </div>
                        {children}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}
