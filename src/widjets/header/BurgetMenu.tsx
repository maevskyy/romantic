import React from 'react';
import blackSecond from '../../shared/assets/imgs/logo/2blackLogo.png';

type Props = {
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgetMenu = ({ setOpenMenu }: Props) => {
	return (
		<div className='fixed inset-0 z-[99] bg-black bg-opacity-50 flex backdrop-blur-sm  justify-end '>
			<div className='w-[80%] h-full  bg-rose-50 flex flex-col p-5'>
				<header className='flex justify-between border-b pb-5'>
					<img
						src={blackSecond}
						alt=''
						className='w-[7em]  md:w-[10em] '
					/>
					<p onClick={() => setOpenMenu(false)}>X</p>
				</header>
				<ul className='items-center gap-5 flex flex-col mt-10 text-lg '>
					<li className='hover:text-main_rose transition-colors'>
						<a href='#about'>About</a>
					</li>
					<li className='hover:text-main_rose transition-colors'>
						<a href='#photos'>Photos</a>
					</li>
					<li className='hover:text-main_rose transition-colors'>
						<a href='#flowers'>Flowers</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BurgetMenu;
