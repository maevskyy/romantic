import React from 'react';
import Card from './card';
import { flowers } from './data';

type Props = {
	setIsPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setWhichCard: React.Dispatch<React.SetStateAction<number>>;
};

const List = ({ setIsPopUpOpen, setWhichCard }: Props) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] '>
			{flowers.map((el, i) => (
				<Card
					photo={el.photo as string}
					subtitle={el.subtitle as string}
					title={el.title as string}
					description={el.description as string}
					plants={el.plants as string}
					qtyOfFlowers={el.qtyOfFlowers as number}
					setIsPopUpOpen={setIsPopUpOpen}
					setWhichCard={setWhichCard}
					additonalStyles={el.additonalStyles as string}
					key={el.id}
					index={i}
				/>
			))}
		</div>
	);
};

export default List;
