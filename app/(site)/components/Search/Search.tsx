'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/Input/Input';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import SearchIcon from './search.svg'

export const Search = ({ className, ...props }: SearchProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [query, setQuery] = useState(searchParams.get('name') || ''); // Инициализация состояния

	// Обновляем URL при вводе текста
	useEffect(() => {
		const queryParams = new URLSearchParams(searchParams.toString());

		if (query) {
			queryParams.set('name', query); // Устанавливаем параметр name
		} else {
			queryParams.delete('name'); // Удаляем параметр name, если пустой
		}

		router.push(`?${queryParams.toString()}`);
	}, [query, router, searchParams]);

	return (
		<div className={styles.search} {...props}>
			<Input
				value={query}
				onChange={e => setQuery((e.target as HTMLInputElement).value)} // Исправляем тип события
				placeholder='Поиск товаров'
			/>
            <button>
                <SearchIcon/>
            </button>
		</div>
	);
};
