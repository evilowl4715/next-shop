'use client';
import { MainSelectProps } from './MainSelect.props';
import styles from './MainSelect.module.css';
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions
} from '@headlessui/react';
import { useRef, useState } from 'react';
import ArrowIcon from './Arrow.svg';
import cn from 'classnames';
import { Category } from '@/interfaces/filter.interface';

const defaultCategory: Category = {
	id: -1,
	name: 'Категория'
};

export const MainSelect = ({ category }: { category: Category[] }) => {
	const categoriesWithDefault = [defaultCategory, ...category];
	const [selectedCat, setSelectedCat] = useState<Category>(categoriesWithDefault[0]);
	const listboxRef = useRef<HTMLDivElement>(null);

	return (
		<Listbox
			as='div'
			value={selectedCat}
			onChange={setSelectedCat}
			ref={listboxRef}
		>
			<ListboxButton className={styles.selectResult}>
				{selectedCat.name}
				<ArrowIcon />
			</ListboxButton>
			<ListboxOptions className={styles.selectList}>
				{category.map(cat => (
					<ListboxOption key={cat.id} value={cat} className={styles.selectItem}>
						{({ selected }) => (
							<div
								className={cn(styles.selectItemName, {
									[styles.selected]: selected
								})}
							>
								{cat.name}
							</div>
						)}
					</ListboxOption>
				))}
			</ListboxOptions>
		</Listbox>
	);
};
