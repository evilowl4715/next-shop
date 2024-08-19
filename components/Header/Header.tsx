'use client';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { Allerta_Stencil } from 'next/font/google';
import { TopMenu } from '../TopMenu/TopMenu';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { HeaderCart } from '../HeaderCart/HeaderCart';
import { HeaderWishlist } from '../HeaderWishlist/HeaderWishlist';
import AccountIcon from './account.svg';
import NavBarIcon from './navbar.svg';
import { useEffect, useState } from 'react';

const AllertaStencil = Allerta_Stencil({
	subsets: ['latin'],
	weight: '400'
});

export const Header = ({ className, ...props }: HeaderProps) => {
	const [isMobile, setIsMobile] = useState<boolean>(
		window.matchMedia('(max-width: 841px)').matches
	);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.matchMedia('(max-width: 841px)').matches);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className={styles.header} {...props}>
			<div className='container'>
				<div className={styles.row}>
					<div className={styles.logo}>
						<a className={AllertaStencil.className} href='/'>
							<span>S</span>HOPPE
						</a>
					</div>
					<div className={styles.nav}>
						<TopMenu />
						<div className={styles.line}></div>
						<div className={styles.actions}>
							{!isMobile && <HeaderSearch />}
							<HeaderCart />
							{!isMobile && <HeaderWishlist />}

							{!isMobile && (
								<a className={styles.accoutn} href='/account/'>
									<AccountIcon />
								</a>
							)}

							{isMobile && (
								<button className={styles.navbar}>
									<NavBarIcon />
								</button>
							)}
						</div>
					</div>
				</div>
				{isMobile && <HeaderSearch />}
			</div>
		</header>
	);
};
