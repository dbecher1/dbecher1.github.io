import { HTMLAttributes } from 'react';
import Section from '../components/Section';

const TempLogo = (props: { text: string }) => {
	return (
		<span className='bg-blue-800/50 text-lg p-2 rounded-xl'>
			{props.text}
		</span>
	);
};

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
				<div className='flex gap-3 flex-row'>
					<TempLogo text='GH' />
					<TempLogo text='LI' />
				</div>
			</Section.Body>
		</Section>
	);
};

export default Contact;
