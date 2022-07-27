import { useTheme } from 'next-themes';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import Image from 'next/image';

const Sidebar = () => {
	const { theme, setTheme } = useTheme();

	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<div>
			{/* My Information */}
			<Image
				src='/images/adi.png'
				alt='avatar'
				className='mx-auto rounded-full'
				width='126'
				height='126'
				layout='intrinsic'
			/>
			<h3 className='my-4 text-2xl font-bold tracking-wider'>
				<span className='text-blue-600'>Adi</span> Munawar
			</h3>
			<p className='px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-100'>Front-End Developer</p>
			<a
				className='flex items-center justify-center px-2 py-1 my-4 bg-gray-200 rounded-full dark:bg-dark-100'
				href='resume.pdf'
				download='adi-munawar-resume.pdf'
				rel='canonical'
			>
				<BsFillFileEarmarkArrowDownFill className='w-4 h-4 mr-1 -mt-1' />
				Download Resume
			</a>

			{/* Social Icon */}
			<div className='flex justify-around mx-auto my-6 text-blue-500'>
				<a
					href='https://www.youtube.com/channel/UCx7GJoa9DAyngsmAQJ_uGLA'
					target='_blank'
					rel='noreferrer'
					aria-label='Youtube'
				>
					<AiFillYoutube className='w-8 h-8 cursor-pointer' />
				</a>
				<a href='https://github.com/AdiMunawar31' target='_blank' rel='noreferrer' aria-label='Github'>
					<AiFillGithub className='w-8 h-8 cursor-pointer' />
				</a>
				<a href='https://www.instagram.com/mhunawar31/' target='_blank' rel='noreferrer' aria-label='Instagram'>
					<AiFillInstagram className='w-8 h-8 cursor-pointer' />
				</a>
			</div>

			{/* Address */}
			<div className='py-4 my-4 bg-gray-200 dark:bg-dark-100' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
				<div className='flex justify-center mt-2 space-x-1 align-center'>
					<GoLocation />
					<span>Kuningan - Indonesia</span>
				</div>
				<p className='my-2'>munawar.adi31@gmail.com</p>
				<p className='my-2'>+628-156-375-4507</p>
			</div>

			{/* Button */}
			<button
				className='w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 focus:outline-none'
				onClick={() => window.open('mailto:munawar.adi31@gmail.com')}
			>
				Email Me
			</button>
			<button
				className='w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700'
				onClick={changeTheme}
			>
				Change Theme
			</button>
		</div>
	);
};

export default Sidebar;
