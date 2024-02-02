import { useState } from 'react';
import AboutMe from './about';
import FlowesShop from './flowersShop';
import Photos from './photos';
import FlowersPopUp from './popups/FlowersPopUp';
import LovePopUp from './popups/LovePopup';

const Main = () => {
	const [isFlowersPopUpOpen, setIsFlowersPopUpOpen] = useState(false);
	const [whichCard, setWhichCard] = useState(0);
	const [isLovePopUpOpen, setIsLovePopUpOpen] = useState(false);

	return (
		<main className='container flex flex-col gap-[100px] mt-[100px] md:mt-[150px] relative'>
			<AboutMe setIsLovePopUpOpen={setIsLovePopUpOpen} />
			<Photos />
			<FlowesShop
				setIsPopUpOpen={setIsFlowersPopUpOpen}
				setWhichCard={setWhichCard}
			/>
			<FlowersPopUp
				isShown={isFlowersPopUpOpen}
				setIsPopUpOpen={setIsFlowersPopUpOpen}
				whichCard={whichCard}
			/>
			<LovePopUp
				isShown={isLovePopUpOpen}
				setIsShown={setIsLovePopUpOpen}
			/>
		</main>
	);
};

export default Main;
