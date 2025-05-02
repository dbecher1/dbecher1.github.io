import { HTMLAttributes } from 'react';
import Section from '../components/Section';
import { aboutMe } from '../portfolio';

const AboutMe = (props: HTMLAttributes<HTMLElement>) => {
	return (
		<Section id='about' {...props}>
			<Section.Title>About Me</Section.Title>
			<Section.Body>{aboutMe}</Section.Body>
		</Section>
	);
};

export default AboutMe;
