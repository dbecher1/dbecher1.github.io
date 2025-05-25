import { useLayoutEffect } from 'react';
//import Lipsum from './components/lipsum';
import Greeting from './sections/Greeting';
import AboutMe from './sections/AboutMe';
//import Card from './components/Card';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { pageTitle } from './portfolio';
import WorkHistory from './sections/WorkHistory';

export default function App() {
	useLayoutEffect(() => {
		document.title = pageTitle;
		document.documentElement.classList.add('dark');

		// set the background in the body
		document.body.classList.add(
			'w-screen',
			'h-screen',
			'bg-linear-to-tl',
			'from-gray-50',
			'via-gray-300',
			'to-gray-50',
			'dark:from-gray-950',
			'dark:via-gray-900',
			'dark:to-gray-950',
			'bg-fixed'
		);

		// set text colors
		document.body.classList.add(
			'text-gray-900',
			'dark:text-gray-100',
			'text-base',
			'font-sans',
			'text-shadow-md',
			'dark:text-shadow-sm/20',
			'text-shadow-gray-300',
			'dark:text-shadow-black',
			'antialiased'
		);
	}, []);

	return (
		<div className='flex w-full h-full m-auto justify-center px-8 py-6 md:px-16 md:py-12'>
			<div
				id='container'
				className='overflow-scroll dark:bg-slate-900 size-fit p-12 rounded-lg border-1 border-gray-800 shadow-xs shadow-gray-600/20 max-w-7xl'
			>
				<Greeting />

				<div className='flex justify-between flex-col md:flex-row shrink gap-4 md:gap-12 my-4 mx-auto'>
					<AboutMe className='md:max-w-1/2' />
					<Skills className='md:max-w-1/2' />
				</div>

				<WorkHistory/>

				<Contact />
				{/* <div className='flex flex-wrap flex-row justify-evenly gap-4'>
					<Card>
						<Card.Header>Header</Card.Header>
						<Card.Body><Lipsum/></Card.Body>
					</Card>
					<Card>
						<Card.Header>Header</Card.Header>
						<Card.Body><Lipsum/></Card.Body>
					</Card>
					<Card>
						<Card.Header>Header</Card.Header>
						<Card.Body><Lipsum/></Card.Body>
					</Card>
					<Card>
						<Card.Header>Header</Card.Header>
						<Card.Body><Lipsum/></Card.Body>
					</Card>
				</div> */}
			</div>
		</div>
	);
}
