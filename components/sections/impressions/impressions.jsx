// IMPORTS
import { Section } from 'components/layouts/section/section.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Image } from 'components/partials/image/image.jsx';

// COMPONENT
const Impressions = () => {

	// RETURN
	return (
		<Section data={ { className: 'impressions' } }>
			<Swiper className="impressions__slider" spaceBetween={ 50 } slidesPerView={ 1 } effect="fade" loop autoplay={{ delay: 5000 }} pagination={{ dynamicBullets: true, clickable: true }} modules={ [EffectFade, Autoplay, Pagination] }>
				<SwiperSlide className="impressions__slide">
					<Image data={ { className: 'impressions__image swiper-no-swiping', src: '/images/15-daniela-haerle-sitzungszimmer-mit-stuhl.jpg' } }/>
				</SwiperSlide>
				<SwiperSlide className="impressions__slide">
					<Image data={ { className: 'impressions__image swiper-no-swiping', src: '/images/16-daniela-haerle-praxis-sitzungszimmer-stuhl.jpg' } }/>
				</SwiperSlide>
				<SwiperSlide className="impressions__slide">
					<Image data={ { className: 'impressions__image swiper-no-swiping', src: '/images/17-daniela-haerle-praxis-wartezimmer.jpg' } }/>
				</SwiperSlide>
				<SwiperSlide className="impressions__slide">
					<Image data={ { className: 'impressions__image swiper-no-swiping', src: '/images/18-daniela-haerle-praxis-empfang.jpg' } }/>
				</SwiperSlide>
				<SwiperSlide className="impressions__slide">
					<Image data={ { className: 'impressions__image swiper-no-swiping', src: '/images/18-daniela-haerle-praxis-empfang.jpg' } }/>
				</SwiperSlide>
				<SwiperSlide className="impressions__slide">
					<Image data={ { className: 'impressions__image swiper-no-swiping', src: '/images/19-daniela-haerle-praxis-schrank.jpg' } }/>
				</SwiperSlide>
				<SwiperSlide className="impressions__slide">
					<Image data={ { className: 'impressions__image swiper-no-swiping', src: '/images/20-daniela-haerle-praxis-sitzungszimmer-schreibtisch.jpg' } }/>
				</SwiperSlide>
				<SwiperSlide className="impressions__slide">
					<Image data={ { className: 'impressions__image swiper-no-swiping', src: '/images/21-daniela-haerle-praxis-sitzungszimmer-daniela-haerle.jpg' } }/>
				</SwiperSlide>
			</Swiper>
		</Section>
	);

};

// EXPORT
export {
	Impressions,
};
