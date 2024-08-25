import styles from './Card.module.css';
import Image from 'next/image';
import LikeIcon from './Like.svg';
import { ForwardedRef } from 'react';
import { CardProps } from './Card.props';

export const Card = (
	{ product, ...props }: CardProps,
	ref: ForwardedRef<HTMLDivElement>
) => {
	const formatPrice = (price: number) => {
		return price.toFixed(2).replace('.', ',');;
	};

	const oldPrice = product.discount
		? formatPrice(product.price / (1 - product.discount / 100))
		: null;

	return (
		<div className={styles.card} {...props} ref={ref}>
			<div className={styles.img}>
				<div className={styles.badges}>
					{product.discount && (
						<div className={styles.badge}>- {product.discount} %</div>
					)}
					<div className={styles.badge}>Продан</div>
				</div>
				<button className={styles.like}>
					<LikeIcon />
				</button>
				<Image src={product.images[0]} width={300} height={300} alt='Product' />
			</div>
			<div className={styles.body}>
				<h3 className={styles.title}>{product.name}</h3>
				<div className={styles.price}>
					{product.discount && (
						<span className={styles.oldPrice}>
							<s>$ {oldPrice}</s>
						</span>
					)}
					<span className={styles.actualPrice}>
						$ {formatPrice(product.price)}
					</span>
				</div>
			</div>
		</div>
	);
};
