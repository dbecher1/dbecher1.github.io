import { HTMLAttributes } from 'react';

const Section = (props: HTMLAttributes<HTMLElement>) => {
	return (
		<section className='py-1' {...props}>
			{props.children}
		</section>
	);
};

const Title = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className='font-semibold text-xl/12 md:text-3xl/16 
            //text-center md:text-left
            '
			{...props}
		>
			{props.children}
		</div>
	);
};

const Body = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className='py-0.5' {...props}>
			{props.children}
		</div>
	);
};

Section.Title = Title;
Section.Body = Body;
export default Section;
