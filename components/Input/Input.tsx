
import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = forwardRef(
	(
		{ error, placeholder, value, className, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={styles.inputBlock}>
				<input
					className={cn(className, styles.input, {
						[styles.error]: error
					})}
					{...props}
					ref={ref}
					value={value}
					placeholder={placeholder}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);

Input.displayName = 'Input';
