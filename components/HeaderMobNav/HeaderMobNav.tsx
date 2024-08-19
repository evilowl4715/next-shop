import { HeaderMobNavProps } from './HeaderMobNav.props';
import styles from './HeaderMobNav.module.css';
import { TopMenu } from '../TopMenu/TopMenu';
import AccountIcon from './account.svg';
import ExitIcon from './exit.svg';
import { HeaderWishlist } from '../HeaderWishlist/HeaderWishlist';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';

export const HeaderMobNav = ({ className, ...props }: HeaderMobNavProps) => {
	return (
		<div className={styles.HeaderMobNav} {...props}>
            <div className={styles.top}>
                <HeaderSearch/>
            </div>
			<TopMenu />
            <div className={styles.bottom}>
                <a href="/account/">
                    <AccountIcon/>
                    Мой аккаунт
                </a>
                <a href="/wishlist/">
                    <HeaderWishlist/>
                    Избранное
                </a>
                <a href="/wishlist/">
                    <ExitIcon/>
                    Выход
                </a>
            </div>
		</div>
	);
};
