'use client';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { Allerta_Stencil } from 'next/font/google';
import { TopMenu } from '../TopMenu/TopMenu';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { HeaderCart } from '../HeaderCart/HeaderCart';
import { HeaderWishlist } from '../HeaderWishlist/HeaderWishlist';
import AccountIcon from './account.svg';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { HeaderMobNav } from '../HeaderMobNav/HeaderMobNav';
import { motion } from 'framer-motion';

const AllertaStencil = Allerta_Stencil({
	subsets: ['latin'],
	weight: '400'
});

export const Header = ({ className, ...props }: HeaderProps) => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.matchMedia('(max-width: 841px)').matches);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const variants = {
		visible: {
			opacity: 1,
			top: '0'
		},
		hidden: {
			opacity: 0,
			top: '-100%'
		}
	};

	return (
		<header className={styles.header} {...props}>
			<div className='container'>
				<div
					className={styles.row}
				>
					<div className={styles.logo}>
						<a className={AllertaStencil.className} href='/'>
							<span>S</span>HOPPE
						</a>
					</div>
					<div className={styles.nav}>
						{!isMobile && <TopMenu />}
						<div className={styles.line}></div>
						<div className={styles.actions}>
							{!isMobile && <HeaderSearch />}
							<a href='/cart/'>
								<HeaderCart />
							</a>
							{!isMobile && (
								<a href='/wishlist/'>
									<HeaderWishlist />
								</a>
							)}

							{!isMobile && (
								<a className={styles.accoutn} href='/account/'>
									<AccountIcon />
								</a>
							)}

							{isMobile && (
								<button
									type='button'
									className={cn(styles.navbar, {
										[styles.opened]: menuOpened
									})}
									onClick={() => setMenuOpened(!menuOpened)}
								>
									<span></span>
									<span></span>
									<span></span>
								</button>
							)}
						</div>
					</div>
				</div>
				{isMobile && <HeaderSearch />}
			</div>
			{isMobile && (
				<motion.div
					animate={menuOpened ? 'visible' : 'hidden'}
					variants={variants}
					initial='hidden'
					className={styles.MobMenu}
				>
					<HeaderMobNav />
				</motion.div>
			)}
		</header>
	);
};
