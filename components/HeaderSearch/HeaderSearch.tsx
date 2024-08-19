'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './HeaderSearch.module.css';
import { HeaderSearchProps } from './HeaderSearch.props';
import SearchIcon from './search.svg';
import SearchInputIcon from './searchInput.svg';
import { motion } from 'framer-motion';

export const HeaderSearch = ({ className, ...props }: HeaderSearchProps) => {
	const [isSearchOpened, setIsSearchOpened] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(
		window.matchMedia('(max-width: 841px)').matches
	);
	const searchRef = useRef<HTMLDivElement>(null);
	const variantsSearch = {
		visible: {
			opacity: 1,
			width: '288px'
		},
		hidden: {
			opacity: 0,
			width: 0
		}
	};

	const variantsButtonSearch = {
		visible: {
			opacity: 1,
			width: '19px'
		},
		hidden: {
			opacity: 0,
			width: 0
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.matchMedia('(max-width: 841px)').matches);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target as Node)
			) {
				setIsSearchOpened(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [searchRef]);

	return (
		<div className={styles.search} {...props} ref={searchRef}>
			{!isMobile ? (
				<motion.div
					animate={isSearchOpened ? 'visible' : 'hidden'}
					variants={variantsSearch}
					initial='hidden'
					className={styles.SearchBlock}
				>
					<SearchInputIcon className={styles.InputIcon} />
					<input type='search' placeholder='Поиск' />
				</motion.div>
			) : (
				<div className={styles.SearchBlock}>
					<SearchInputIcon className={styles.InputIcon} />
					<input type='search' placeholder='Поиск' />
				</div>
			)}

			{!isMobile && (
				<motion.button
					animate={isSearchOpened ? 'hidden' : 'visible'}
					variants={variantsButtonSearch}
					initial='visible'
					className={styles.SearchBtnOpen}
					onClick={() => setIsSearchOpened(true)}
				>
					<SearchIcon />
				</motion.button>
			)}
		</div>
	);
};
