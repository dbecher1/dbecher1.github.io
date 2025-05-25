// Defining all the data here to make one centralized place to change everything

// Meta
export const pageTitle = "Daniel Becher's Portfolio";

// Greeting
export const greeting = "Hi, I'm Daniel.";
export const subGreeting = 'I build software.';
export const highlightedTechStack = ['Fullstack', 'React', 'TypeScript'];
export const techStackDelim = '·';
export const resumePath = '/Daniel Becher - Resume.pdf'; // relative to public
export const resumeButtonText = 'Download my resume';

// About
export const aboutMe =
	"I'm a passionate, well-rounded software developer who is eager to prove myself. This website is a heavy work in progress, sorry for the construction!";

// Skills
export const skillList = [
	'TypeScript',
	'React',
	'React Native',
	'Rust',
	'C++',
	'.NET',
	'Python',
	'SQL',
	'Agile',
	'Scrum',
];

export interface WorkDesc {
    title: string;
    company: string;
	location: string;
    from: string;
    to: string;
    desc: string[];
}

export const showWorkHistory = false;

export const myWorkHistory: WorkDesc[] = [
	{
		title: 'Shift Supervisor',
		company: 'Starbucks',
		location: 'Commack, NY / Dunn, NC',
		from: 'May 2014',
		to: 'Current',
		desc: ['help', 'me', 'please']
	},
	{
		title: 'Shift Supervisor',
		company: 'Starbucks',
		location: 'Commack, NY / Dunn, NC',
		from: 'May 2014',
		to: 'Current',
		desc: ['help', 'me', 'please']
	}
]