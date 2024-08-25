'use client';
import styles from './MainSelect.module.css';
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions
} from '@headlessui/react';
import { useState } from 'react';
import ArrowIcon from './Arrow.svg';
import cn from 'classnames';
import { Category } from '@/interfaces/filter.interface';
import { useRouter, useSearchParams } from 'next/navigation';

export const MainSelect = ({ category = [] }: { category: Category[] }) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const defaultCategory: Category = { id: -1, name: 'Категория' };
	const categoriesWithDefault = [defaultCategory, ...category];
	const [selectedCat, setSelectedCat] = useState<Category>(
		categoriesWithDefault.find(
			cat => cat.id === parseInt(searchParams.get('categoryId') || '-1')
		) || categoriesWithDefault[0]
	);

	const handleCategoryChange = (cat: Category) => {
		setSelectedCat(cat);
		const params = new URLSearchParams(searchParams.toString());
		params.set('categoryId', cat.id.toString());
		router.push(`/catalog?${params.toString()}`);
	};

	return (
		<Listbox as='div' value={selectedCat} onChange={handleCategoryChange}>
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
