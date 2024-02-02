import logo from '../../../shared/assets/imgs/logo/bulka.jpg';
import redHeart from '../../../shared/assets/imgs/logo/redHeart.png';
import greenHeart from '../../../shared/assets/imgs/logo/greenHeart.png';

const Photo = () => {
	return (
		<div className='  md:mr-5 px-10  relative self-center '>
			<img
				src={logo}
				alt=''
				className='h-[380px] min-w-[260px] md:w-[280px]    object-cover rounded-t-[40%]'
			/>
			<img
				src={redHeart}
				className='absolute top-2  right-4  rotate-45 w-[100px] h-[100px] '
				alt=''
			/>
			<img
				src={greenHeart}
				className='absolute bottom-5 left-[-5px]  rotate-[-75deg]  w-[100px] h-[80px]  text-rose-50 '
				alt=''
			/>
		</div>
	);
};

export default Photo;
