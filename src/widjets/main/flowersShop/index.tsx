import React from 'react';
import List from './list';

type Props = {
	setIsPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setWhichCard: React.Dispatch<React.SetStateAction<number>>;
};

const FlowesShop = ({ setIsPopUpOpen, setWhichCard }: Props) => {
	return (
		<section
			className='px-4 md:px-16 mt-[-50px] flex flex-col items-center'
			id='flowers'
		>
			<h5 className=' text-[20px] md:text-[24px] my-[54px] font-semibold text-center'>
				Flowers shop 💐
			</h5>
			<List
				setIsPopUpOpen={setIsPopUpOpen}
				setWhichCard={setWhichCard}
			/>
		</section>
	);
};

export default FlowesShop;
