import React from 'react';

type Props = {
	setIsLovePopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Info = ({ setIsLovePopUpOpen }: Props) => {
	return (
		<div className='flex flex-col gap-3 md:gap-6'>
			<div className='flex items-center gap-3'>
				<div className='border border-[#2D2D2D] w-[16px] h-[2px]'></div>
				<h6 className=' uppercase tracking-[10px] text-xs'> Her name is</h6>
			</div>
			<h2 className='text-[40px] md:text-[58px]  leading-tight   max-w-[450px] font-bold'>
				World's most beautiful girl
			</h2>
			<p className='  max-w-[450px]'>
				This site is dedicated to the most charming, beautiful, adorable, amazing,
				wonderful, inspiring, gorgeous, magical, exciting and my favourite person in the
				world
			</p>
			<button
				onClick={() => setIsLovePopUpOpen((prev: boolean) => !prev)}
				className=' text-[20px] px-[64px] py-[24px] text-white  font-semibold bg-[#2D2D2D] rounded-sm w-fit mt-[24px] hover:bg-main_rose hover:text-black transition-colors'
			>
				Love
			</button>
		</div>
	);
};

export default Info;
