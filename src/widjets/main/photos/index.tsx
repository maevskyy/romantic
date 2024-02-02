import Carousel from './Carousel';

const Photos = () => {
	return (
		<section
			className='px-4 md:px-16 '
			id='photos'
		>
			<h5 className=' text-[20px] md:text-[24px] my-[54px] font-semibold text-center'>
				A pictures of me eating you 😋
			</h5>
			<Carousel />
		</section>
	);
};

export default Photos;
