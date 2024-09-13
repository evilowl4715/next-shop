'use client';
import { SliderProps } from '@nextui-org/slider';
import SlickSlider from 'react-slick';
import styles from './Slider.module.css';
import Image from 'next/image';
import Img1 from './Img1.jpg';
import Img2 from './Img2.jpg';
export const Silder = ({ className, ...props }: SliderProps) => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className={styles.slider}>
			<SlickSlider {...settings}>
				<div className={styles.slide}>
					<div className={styles.img}>
						<Image src={Img1} alt='Картинка 1' />
					</div>
					<div className={styles.content}>
						<h2>Gold big hoops</h2>
						<p>$ 68,00</p>
						<a href='' className={styles.btn}>
							Смотреть
						</a>
					</div>
				</div>
				<div className={styles.slide}>
					<div className={styles.img}>
						<Image src={Img2} alt='Картинка 1' />
					</div>
					<div className={styles.content}>
						<h2>Gold big hoops</h2>
						<p>$ 68,00</p>
						<a href='' className={styles.btn}>
							Смотреть
						</a>
					</div>
				</div>
			</SlickSlider>
		</div>
	);
};
