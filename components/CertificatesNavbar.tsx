import { FunctionComponent } from 'react';
import { CategoryCertificate } from '../types';

export const NavItem: FunctionComponent<{
	value: CategoryCertificate | 'all';
	handlerFilterCategory: Function;
	active: string;
}> = ({ value, handlerFilterCategory, active }) => {
	let className = 'capitalize cursor-pointer hover:text-blue-600';
	if (active === value) className += ' text-blue-600';

	return (
		<ul>
			<li className={className} onClick={() => handlerFilterCategory(value)}>
				{value}
			</li>
		</ul>
	);
};

const CertificatesNavbar: FunctionComponent<{
	handlerFilterCategory: Function;
	active: string;
}> = (props) => {
	return (
		<div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
			<NavItem value='all' {...props} />
			<NavItem value='random' {...props} />
			<NavItem value='lang' {...props} />
			<NavItem value='android' {...props} />
			<NavItem value='flutter' {...props} />
			<NavItem value='frontEnd' {...props} />
			<NavItem value='backEnd' {...props} />
			<NavItem value='devOps' {...props} />
		</div>
	);
};

export default CertificatesNavbar;
