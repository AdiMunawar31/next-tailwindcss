import Head from 'next/head';
import React, { useState } from 'react';
import CertificateCard from '../components/CertificateCard';
import CertificatesNavbar from '../components/CertificatesNavbar';
import { certificates as certificatesData } from '../data';
import { CategoryCertificate } from '../types';

const Certificates = () => {
	const [certificates, setCertificates] = useState(certificatesData);
	const [active, setActive] = useState('all');

	const handlerFilterCategory = (category: CategoryCertificate | 'all') => {
		if (category === 'all') {
			setCertificates(certificatesData);
			setActive(category);
			return;
		}

		const newArray = certificatesData.filter((certificate) => certificate.category.includes(category));
		setCertificates(newArray);
		setActive(category);
	};

	return (
		<div className='px-5 py-2 overflow-y-scroll' style={{ height: '80vh' }}>
			<Head>
				<title>Adi Munawar | Certificates</title>
			</Head>
			<CertificatesNavbar handlerFilterCategory={handlerFilterCategory} active={active} />

			<div className='relative grid grid-cols-12 gap-4 my-3'>
				{certificates.map((certificate, id) => (
					<div className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-100' key={id}>
						<CertificateCard certificate={certificate} key={certificate.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Certificates;
