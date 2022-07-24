import { FunctionComponent, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { ICertificate } from '../types';

import Image from 'next/image';

const CertificateCard: FunctionComponent<{
	certificate: ICertificate;
}> = ({ certificate: { name, image_path } }) => {
	const [showDetail, setShowDetail] = useState(false);

	return (
		<div>
			<Image
				src={image_path}
				alt={name}
				className='cursor-pointer'
				onClick={() => setShowDetail(true)}
				layout='responsive'
				height='200'
				width='300'
			/>
			<p className='mt-2 text-center cursor-pointer hover:text-blue-600' onClick={() => setShowDetail(true)}>
				{name}
			</p>

			{showDetail && (
				<div className='absolute top-0 left-0 z-10 w-full h-auto py-2 px-2 text-black bg-primary md:py-4 md:px-16 shadow-custom-light dark:shadow-custom-dark gap-x-12 dark:text-gray-400 dark:bg-dark-50'>
					<div className='bg-gray-400 border-4'>
						<Image src={image_path} alt={name} layout='responsive' height='210' width='300' />
					</div>
					<button
						onClick={() => setShowDetail(false)}
						className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'
					>
						<MdClose size={30} />
					</button>
				</div>
			)}
		</div>
	);
};

export default CertificateCard;
