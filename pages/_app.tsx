import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-12 sm:px-20 md:px-32 lg:48">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-200 shadow-custom-light dark:shadow-custom-dark lg:col-span-3 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-200 shadow-custom-light dark:shadow-custom-dark lg:col-span-9 rounded-2xl">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
