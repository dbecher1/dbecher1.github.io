import { HTMLAttributes } from 'react';
import Section from '../components/Section';
import { skillList } from '../portfolio';

const SkillTab = (skill: string) => {
	return (
		<span className='bg-blue-950/50 hover:bg-blue-900 py-0.75 px-3 rounded-2xl'>
			{skill}
		</span>
	);
};

const Skills = (props: HTMLAttributes<HTMLElement>) => {
	return (
		<Section id='skills' {...props}>
			<Section.Title>Skills</Section.Title>
			<Section.Body className='flex gap-x-4 gap-y-3 flex-wrap max-w-7/8'>
				{skillList.map((s) => SkillTab(s))}
			</Section.Body>
		</Section>
	);
};

export default Skills;
