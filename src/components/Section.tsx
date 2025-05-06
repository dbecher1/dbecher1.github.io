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
			className='font-semibold text-xl/12 md:text-2xl/16 not-md:text-center'
			{...props}
		>
			{props.children}
		</div>
	);
};

const CenterTitle = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className='font-semibold text-xl/12 md:text-2xl/16 text-center'
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
Section.CenterTitle = CenterTitle;
Section.Body = Body;
export default Section;
