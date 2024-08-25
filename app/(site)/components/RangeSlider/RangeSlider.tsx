'use client';
import { Slider } from '@nextui-org/slider';
import styles from './RangeSlider.module.css';
import { useState } from 'react';
import { RangeSliderProps } from './RangeSlider.props';
export const RangeSlider = ({minValue, maxValue, ...props}:RangeSliderProps) => {

	const [value, setValue] = useState<number[]>([minValue, maxValue]);

	const handleChange = (newValue:number | number[]) => {
		if (Array.isArray(newValue)) {
			setValue(newValue);
		} else {
			setValue([newValue, newValue]);
		}
	};

	return (
		<div {...props}>
			<Slider
				aria-labelledby='slider-label'
				formatOptions={{ style: 'currency', currency: 'USD' }}
				step={10}
				maxValue={maxValue}
				minValue={minValue}
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
