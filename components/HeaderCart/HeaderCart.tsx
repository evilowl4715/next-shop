'use client';
import { HeaderCartProps } from './HeaderCart.props';
import styles from './HeaderCart.module.css';
import CartIcon from './cart.svg';
import { useState } from 'react';
export const HeaderCart = ({ className, ...props }: HeaderCartProps) => {
	const [count, setCount] = useState<number>(1);
	return (
		<div className={styles.cart} {...props}>
			<a className={styles.button} href='/cart/'>
				<CartIcon />
				{count > 0 && <span className={styles.count}>{count}</span>}
			</a>
		</div>
	);
};
