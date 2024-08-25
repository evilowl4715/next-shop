import { CardProps } from '@nextui-org/react';
import styles from './Card.module.css';
import Image from 'next/image';
import CardImg from './card.png';
import LikeIcon from './Like.svg';

export const Card = ({ className, ...props }: CardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.img}>
				<div className={styles.badges}>
					<div className={styles.badge}>- 21%</div>
					<div className={styles.badge}>Продан</div>
				</div>
                <button className={styles.like}>
                    <LikeIcon/>
                </button>
				<Image src={CardImg} width={300} height={300} alt='Product' />
			</div>
			<div className={styles.body}>
				<h3 className={styles.title}>Lira Earrings</h3>
				<div className={styles.price}>
					<span className={styles.oldPrice}>
						<s>$ 29,00</s>
					</span>
					<span className={styles.actualPrice}>$ 25,00</span>
				</div>
			</div>
		</div>
	);
};
