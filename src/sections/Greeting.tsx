import {
	greeting,
	highlightedTechStack,
	resumeButtonText,
	resumePath,
	subGreeting,
	techStackDelim,
} from '../portfolio';

const TechStack = () => {
	return (
		<div className='text-sm font-medium my-2 gap-2 flex justify-center md:justify-start'>
			{highlightedTechStack
				.flatMap((entry, i) =>
					i + 1 < highlightedTechStack.length
						? [entry, techStackDelim]
						: [entry]
				)
				.map((e) => (
					<span>{e}</span>
				))}
		</div>
	);
};

const Greeting = () => {
	return (
		<section className='flex flex-col gap-2 mb-5' id='greeting'>
			<div className='text-4xl md:text-5xl font-bold text-blue-400 text-center md:text-left'>
				{greeting}
			</div>
			<div className='text-xl md:text-3xl font-medium text-center md:text-left'>
				{subGreeting}
			</div>
			<TechStack />
			<div className='mx-auto md:mx-0'>
				<a
					href={resumePath}
					className='text-gray-100 bg-blue-600/80 hover:bg-blue-500 py-2 px-3 rounded-xl font-medium hover:shadow-md
								drop-shadow-gray-600'
				>
					{resumeButtonText}
				</a>
			</div>
		</section>
	);
};

export default Greeting;
