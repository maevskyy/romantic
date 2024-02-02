/* eslint-disable no-mixed-spaces-and-tabs */
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { imagesWithInfo } from '../../../shared/assets/imgs/carousel_eating';

import './carousel.css';
import LocationIcon from '../../../shared/components/svg/LocationIcon';

const Carousel = () => {
	return (
		<Swiper
			className='swiper_container'
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			loop={true}
			modules={[EffectCoverflow, Pagination, Navigation]}
			slidesPerView={'auto'}
			coverflowEffect={{
				rotate: 0,
				stretch: 0,
				depth: 100,
				modifier: 1.5,
			}}
			navigation={{
				nextEl: 'swiper-button-next',
				prevEl: 'wiper-button-prev',
			}}
		>
			{imagesWithInfo.map((image) => (
				<SwiperSlide
					key={image.id}
					className='select-none swiper-slide-container'
				>
					<img
						src={image.image}
						alt=''
						className='w-[20em] h-[40em] object-cover  '
					/>
					<div className='w-full flex items-center justify-between px-4 py-2 bg-[#2b2b2b] rounded-b-[10px] text-white'>
						<p>{image.words}</p>
						<div className='flex items-center gap-2'>
							<LocationIcon style='text-white w-4 h-4' />
							<p>{image.location}</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
