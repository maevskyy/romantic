import roseLogo from '../../shared/assets/imgs/logo/roseLogo.png';
import Burger from '../../shared/components/svg/Burger';

type Props = {
	setopenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setopenMenu }: Props) => {
	return (
		<header className=' fixed top-0 z-50  backdrop-blur-xl w-full  '>
			<div className='   flex items-center  justify-between py-5   m-auto px-5 md:px-10 max-w-[1450px] '>
				<img
					src={roseLogo}
					alt=''
					className='w-[7em]  md:w-[10em] '
				/>
				<div onClick={() => setopenMenu(true)}>
					<Burger style='block md:hidden' />
				</div>
				<ul className='hidden items-center gap-5 md:flex'>
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
		</header>
	);
};

export default Header;
