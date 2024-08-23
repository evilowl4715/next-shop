'use client';
import { MainSelectProps } from './MainSelect.props';
import styles from './MainSelect.module.css';
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions
} from '@headlessui/react';
import { useState } from 'react';
import ArrowIcon from './Arrow.svg';
import cn from 'classnames'

export const MainSelect = ({ className }: MainSelectProps) => {
	const cats = [
		{ id: 1, name: 'Cat 1' },
		{ id: 2, name: 'Cat 2' },
		{ id: 3, name: 'Cat 3' },
		{ id: 4, name: 'Cat 4' },
		{ id: 5, name: 'Cat 5' }
	];

	const [selectedCat, setSelectedCat] = useState(cats[0]);

	return (
		<Listbox value={selectedCat} onChange={setSelectedCat}>
			<ListboxButton className={styles.selectResult}>
				{selectedCat.name}
				<ArrowIcon/>
			</ListboxButton>
			<ListboxOptions anchor='bottom' className={styles.selectList}>
				{cats.map(cat => (
					<ListboxOption key={cat.id} value={cat} className={styles.selectItem}>
					{({selected }) => (
						<div className={cn(styles.selectItemName, {
							[styles.selected] : selected
						})}>
							{cat.name}
						</div>
					)}
					</ListboxOption>
				))}
			</ListboxOptions>
		</Listbox>
	);
};
