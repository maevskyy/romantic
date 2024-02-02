import React from 'react';
import Shop from '../../../shared/components/svg/Shop';

type Props = {
	photo: string;
	subtitle: string;
	title: string;
	description: string;
	plants: string;
	qtyOfFlowers: number;
	additonalStyles?: string;
	setIsPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setWhichCard: React.Dispatch<React.SetStateAction<number>>;
	index: number;
};

const Card = ({
	setIsPopUpOpen,
	photo,
	subtitle,
	title,
	description,
	plants,
	qtyOfFlowers,
	additonalStyles,
	index,
	setWhichCard,
}: Props) => {
	return (
		<div
			className={`flex flex-col rounded-[10px]  shadow-lg ${
				additonalStyles ? additonalStyles : ''
			} hover:scale-[1.05] transition-transform max-w-[23em]  bg-white  select-none `}
		>
			<img
				src={photo}
				className=' object-cover rounded-t-[10px]  max-h-[18em]'
				alt=''
			/>
			<div className='flex flex-col p-8 relative'>
				<span className=' mb-2 text-gray-500 text-xs tracking-[3px] '>{subtitle}</span>
				<h6 className='  font-bold mb-5 text-3xl   text-[#2b2b2b]'>{title}</h6>
				<p className='text-xs mb-10   text-gray-500'>{description}</p>
				<div className='flex justify-between'>
					<div className='flex flex-col gap-2 items-start'>
						<span className='text-sm text-gray-700 '>Plants</span>
						<span className='text-sm font-semibold text-main_rose'>{plants}</span>
					</div>
					<div className='h-full w-[2px] border  border-dashed ml-[18px]'></div>
					<div className='flex flex-col gap-2 items-end'>
						<span className='text-sm text-gray-700'>Quantity</span>
						<span className='text-sm font-semibold text-main_rose'>
							{qtyOfFlowers} Flowers
						</span>
					</div>
				</div>
				<div
					onClick={() => {
						setIsPopUpOpen(true);
						setWhichCard(index);
					}}
					className='absolute top-[-25px] bg-main_rose right-5 p-3 rounded-full transition-all hover:cursor-pointer hover:brightness-110'
				>
					<Shop style='text-white' />
				</div>
			</div>
		</div>
	);
};

export default Card;
