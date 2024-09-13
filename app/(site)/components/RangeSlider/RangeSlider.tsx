'use client';
import { Slider } from '@nextui-org/slider';
import styles from './RangeSlider.module.css';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { RangeSliderProps } from './RangeSlider.props';

export const RangeSlider = ({
    minValue = 0,
    maxValue = 100,
    queryMinPrice,
    queryMaxPrice
}: RangeSliderProps & { queryMinPrice?: number, queryMaxPrice?: number }) => {
    const [sliderRange] = useState<[number, number]>([minValue, maxValue]);
    const [localValue, setLocalValue] = useState<[number, number]>([minValue, maxValue]);
    const router = useRouter();
	const searchParams = useSearchParams();

    useEffect(() => {
        setLocalValue(prev => [
            queryMinPrice !== undefined && !isNaN(queryMinPrice) && queryMinPrice >= sliderRange[0] && queryMinPrice <= sliderRange[1]
                ? queryMinPrice
                : prev[0],
            queryMaxPrice !== undefined && !isNaN(queryMaxPrice) && queryMaxPrice <= sliderRange[1] && queryMaxPrice >= sliderRange[0]
                ? queryMaxPrice
                : prev[1]
        ]);
    }, [queryMinPrice, queryMaxPrice, sliderRange]);

    const handleChange = (newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setLocalValue(newValue as [number, number]);
        } else {
            setLocalValue([newValue, newValue]);
        }
    };

	const handleChangeEnd = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('priceMin', localValue[0].toString());
		params.set('priceMax', localValue[1].toString());
		router.push(`/catalog?${params.toString()}`);
	  };
	

    return (
        <div>
            <Slider
                aria-labelledby='slider-label'
                formatOptions={{ style: 'currency', currency: 'USD' }}
                step={1}
                maxValue={sliderRange[1]}
                minValue={sliderRange[0]}
                value={localValue}
                onChange={handleChange}
                onChangeEnd={handleChangeEnd}
                classNames={{
                    track: [styles.track],
                    filler: [styles.filler],
                    thumb: [styles.thumb],
                }}
            />
            <p className={styles.prices}>
                {localValue.map(b => `$${b}`).join(' – ')}
            </p>
        </div>
    );
};