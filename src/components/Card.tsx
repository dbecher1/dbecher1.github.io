import { HTMLAttributes } from 'react';

const Card = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className='dark:bg-slate-800 border-1 border-slate-700/80 max-w-md min-w-sm py-3
            px-5 rounded-lg shadow-sm'
			{...props}
		>
			{props.children}
		</div>
	);
};

const Header = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className='text-3xl font-medium' {...props}>
			{props.children}
		</div>
	);
};

const Body = (props: HTMLAttributes<HTMLDivElement>) => {
	return <div {...props}>{props.children}</div>;
};

Card.Header = Header;
Card.Body = Body;
export default Card;
