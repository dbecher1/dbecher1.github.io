import { SVGProps } from 'react';

export function BaselineArrowUpward(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			width='1em'
			height='1em'
			{...props}
		>
			<path
				fill='currentColor'
				d='m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z'
			></path>
		</svg>
	);
}
