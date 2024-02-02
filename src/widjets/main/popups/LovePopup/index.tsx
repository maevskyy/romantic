import React, { useState } from 'react';
import first from '../../../../shared/assets/imgs/lovePopUp/first.jpg';
import second from '../../../../shared/assets/imgs/lovePopUp/second.jpg';
import heaerRed from '../../../../shared/assets/imgs/logo/redHeart.png';
import greenHeart from '../../../../shared/assets/imgs/logo/greenHeart.png';

import './ainmation.css';

type Props = {
	isShown: boolean;
	setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const LovePopUp = ({ isShown, setIsShown }: Props) => {
	const [changeImages, setChangeImages] = useState(false);

	return (
		<div
			className={`fixed inset-0 z-[50] bg-black bg-opacity-50 ${
				isShown ? 'flex' : 'hidden opacity-0'
			} items-center justify-center transition-opacity duration-300 `}
			onClick={() => setIsShown(false)}
		>
			<div
				className='bg-white box rounded shadow-md transform scale-100 transition-transform select-none animated-border relative '
				onClick={(e) => e.stopPropagation()}
			>
				{changeImages ? (
					<img
						src={second}
						className='w-[50em]  rounded  h-[32em]   object-cover'
						alt=''
					/>
				) : (
					<img
						src={first}
						className='w-[50em]  rounded  h-[32em]   object-cover'
						alt=''
					/>
				)}

				<div className='absolute z-[60]  bottom-20 md:bottom-14 w-full text-center flex justify-center items-center'>
					<p
						onClick={() => setChangeImages((prev) => !prev)}
						className='text-lg md:text-4xl font-bold  animate-bounce max-w-[80%] md:max-w-[60%] bg-white text-green-500 px-4 py-2 hover:cursor-pointer border  hover:brightness-110'
					>
						{changeImages ? 'Пишите' : 'Лучший секс на дому:'}
						<span className='text-red-500 animate-spin'>
							{' '}
							{changeImages ? '@maievsky' : '(050) 845-48-64'}
						</span>
					</p>
				</div>
				{/* <img src={heaerRed} /> */}
				<img
					src={greenHeart}
					className='absolute top-10 left-10 animate-spin h-[2em] w-[2em] object-contain'
				/>
				<img
					src={heaerRed}
					className='absolute top-10 right-10 animate-spin h-[2em] w-[2em] object-contain'
				/>
				<img
					src={greenHeart}
					className='absolute bottom-10 right-10 animate-spin h-[2em] w-[2em] object-contain'
				/>
				<img
					src={heaerRed}
					className='absolute bottom-10 left-10 animate-spin h-[2em] w-[2em] object-contain'
				/>
			</div>
		</div>
	);
};

export default LovePopUp;
