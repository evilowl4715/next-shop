import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { Allerta_Stencil } from 'next/font/google';

const AllertaStencil = Allerta_Stencil({
	subsets: ['latin'],
	weight: '400'
});

export const Header = ({ className, ...props }: HeaderProps) => {
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
						<div className={styles.menu}>
							<ul>
								<li>
									<a href=''>Магазин</a>
								</li>
								<li>
									<a href=''>О нас</a>
								</li>
							</ul>
						</div>
                        <div className={styles.line}></div>
						<div className={styles.actions}>
							<p>поиск</p>
							<p>корзина</p>
							<p>избранное</p>
							<p>лк</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
