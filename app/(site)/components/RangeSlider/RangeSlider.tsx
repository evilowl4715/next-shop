'use client';
import { Slider } from '@nextui-org/slider';
import styles from './RangeSlider.module.css';
import { useState } from 'react';
export const RangeSlider = () => {

	const [value, setValue] = useState([100, 300]);

	const handleChange = (newValue:number | number[]) => {
		if (Array.isArray(newValue)) {
			setValue(newValue);
		} else {
			setValue([newValue, newValue]);
		}
	};

	return (
		<div>
			<Slider
				aria-labelledby='slider-label'
				formatOptions={{ style: 'currency', currency: 'USD' }}
				step={10}
				maxValue={1000}
				minValue={0}
				value={value}
				onChange={handleChange}
				classNames={{
					track: [styles.track],
					filler: [styles.filler],
					thumb: [styles.thumb]
				}}
			/>
			<p className={styles.prices}>
				{Array.isArray(value) && value.map(b => `$${b}`).join(' – ')}
			</p>
		</div>
	);
};
