import { HTMLAttributes } from 'react';
import Section from '../components/Section';
import GithubIcon from '../icons/GithubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import EmailIcon from '../icons/EmailIcon';

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
			<Section.Body className='flex gap-3 flex-row'>
				<a href='mailto:debecher93@gmail.com'>
					<EmailIcon className='fill-black dark:fill-white hover:fill-gray-500'/>
				</a>
				<a href="https://github.com/dbecher1">
					<GithubIcon
						className='fill-black dark:fill-white hover:fill-gray-500'
					/>
				</a>
				<a href="https://www.linkedin.com/in/daniel-becher-441a69292">
					<LinkedInIcon
						className='fill-black dark:fill-white hover:fill-gray-500'
					/>
				</a>
			</Section.Body>
		</Section>
	);
};

export default Contact;
