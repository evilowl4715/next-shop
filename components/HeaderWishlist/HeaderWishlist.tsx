'use client';

import { HeaderWishlistProps } from './HeaderWishlist.props';
import styles from './HeaderWishlist.module.css';
import WishListIcon from './wishlist.svg';
import { useState } from 'react';

export const HeaderWishlist = ({
	className,
	...props
}: HeaderWishlistProps) => {
	const [count, setCount] = useState<number>(1);
	return (
		<div className={styles.wishlist} {...props}>
			<WishListIcon />
			{count > 0 && <span className={styles.count}>{count}</span>}
		</div>
	);
};
