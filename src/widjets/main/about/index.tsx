import Info from './Info';
import Photo from './Photo';

type Props = {
	setIsLovePopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutMe = ({ setIsLovePopUpOpen }: Props) => {
	return (
		<section
			className=' flex flex-col-reverse gap-10 md:gap-0 md:flex-row md:justify-between px-4 md:px-16'
			id='about'
		>
			<Info setIsLovePopUpOpen={setIsLovePopUpOpen} />
			<Photo />
		</section>
	);
};

export default AboutMe;
