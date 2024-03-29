import { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from '../types';

import Image from 'next/image';

const ProjectCard: FunctionComponent<{
	project: IProject;
}> = ({ project: { name, image_path, deployed_url, description, github_url, key_techs } }) => {
	const [showDetail, setShowDetail] = useState(false);

	return (
		<div>
			<Image
				src={image_path}
				alt={name}
				className='cursor-pointer'
				onClick={() => setShowDetail(true)}
				layout='responsive'
				height='150'
				width='300'
			/>
			<p className='my-2 text-center cursor-pointer hover:text-blue-600' onClick={() => setShowDetail(true)}>
				{name}
			</p>

			{showDetail && (
				<div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-primary md:p-10 shadow-custom-light dark:shadow-custom-dark md:grid-cols-2 gap-x-12 dark:text-gray-400 dark:bg-dark-50'>
					<div>
						{/* <img src={image_path} alt={name} /> */}
						<div className='bg-gray-400 border-4'>
							<Image src={image_path} alt={name} layout='responsive' height='150' width='300' />
						</div>
						<div className='flex justify-center my-4 space-x-3'>
							<a
								href={github_url}
								target='_blank'
								rel='noreferrer'
								className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
							>
								<AiFillGithub /> <span>Github</span>
							</a>
							<a
								href={deployed_url}
								target='_blank'
								rel='noreferrer'
								className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
							>
								<AiFillProject /> <span>Project</span>
							</a>
						</div>
					</div>

					<div>
						<h2 className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
						<h3 className='mb-3 font-medium'>{description}</h3>

						<div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
							{key_techs.map((tech) => (
								<span key={tech} className='px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm'>
									{tech}
								</span>
							))}
						</div>
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

export default ProjectCard;
