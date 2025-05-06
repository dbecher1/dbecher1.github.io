import { HTMLAttributes } from 'react';
import Section from '../components/Section';
import GithubIcon from '../icons/GithubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

const Contact = (props: HTMLAttributes<HTMLElement>) => {
	return (
		<Section
			id='contact'
			className='md:max-w-1/4
            //md:ml-auto
            '
			{...props}
		>
			<Section.Title>Contact Me</Section.Title>
			<Section.Body className='flex flex-col gap-3'>
				<a
					href='mailto:debecher93@gmail.com'
					className='text-blue-500 hover:text-blue-300'
				>
					debecher93@gmail.com
				</a>
				<div className='flex gap-2 flex-row'>
					{/* <GithubIcon
						className='fill-black dark:fill-white'
					/>
					<LinkedInIcon
						className='fill-black dark:fill-white'
					/> */}
				</div>
			</Section.Body>
		</Section>
	);
};

export default Contact;
