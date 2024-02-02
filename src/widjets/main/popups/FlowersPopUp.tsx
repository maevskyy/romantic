import React from 'react';

type Props = {
	isShown: boolean;
	setIsPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
	whichCard: number;
};

const FlowersPopUp = ({ isShown, setIsPopUpOpen, whichCard }: Props) => {
	console.log(whichCard);

	const texts = [
		'Извините, пока что это очень дорого, попробуйте позже',
		'Извините, еще зарплата не пришла, попробуйте позже',
		'Извините, еще один кредит я брать не буду, попробуйте позже',
		'Извините, 10 грн на карте, попробуйте позже',
	];

	const finalText =
		whichCard !== 6
			? texts[Math.floor(Math.random() * texts.length)]
			: 'Спасибо за покупку, с вас 80 грн';

	return (
		<div
			className={`fixed inset-0 z-[50] bg-black bg-opacity-50 ${
				isShown ? 'flex' : 'hidden opacity-0'
			} items-center justify-center transition-opacity duration-300`}
		>
			<div className='bg-white p-8 w-[82%] md:w-fit rounded shadow-md transform scale-100 transition-transform'>
				<p className='text-lg font-semibold mb-4'>{finalText}</p>
				<button
					className='bg-gray-500 text-white px-4 py-2 rounded'
					onClick={() => setIsPopUpOpen(false)}
				>
					{whichCard !== 6 ? 'Close' : 'Бля'}
				</button>
			</div>
		</div>
	);
};

export default FlowersPopUp;
