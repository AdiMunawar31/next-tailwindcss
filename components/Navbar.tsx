import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const NavItem: FunctionComponent<{
	activeItem: string;
	setActiveItem: Function;
	name: string;
	route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
	return activeItem !== name ? (
		<Link href={route}>
			<a>
				<span onClick={() => setActiveItem(name)} className='hover:text-blue-600'>
					{name}
				</span>
			</a>
		</Link>
	) : null;
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>('');

	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === '/') setActiveItem('About');
		if (pathname === '/projects') setActiveItem('Projects');
		if (pathname === '/resume') setActiveItem('Resume');
		if (pathname === '/certificates') setActiveItem('Certificates');
	}, [pathname]);

	return (
		<div className='block sm:flex justify-between px-5 py-3 my-2'>
			<span className='text-xl font-bold text-blue-600 border-b-4 border-blue-600 md:text-2xl'>{activeItem}</span>
			<div className='flex space-x-4 text-lg mt-8 sm:mt-0'>
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Certificates' route='/certificates' />
			</div>
		</div>
	);
};

export default Navbar;
