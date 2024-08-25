'use client';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISubscriptionForm } from './subscription.interface';
import ArrowSubmitIcon from './ArrowSubmit.svg';
import InIcon from './In.svg';
import FacebookIcon from './Facebook.svg';
import InstaIcon from './Insta.svg';
import TwitterIcon from './Twitter.svg';
import CheckIcon from './check.svg';
import { Notification } from '../Notification/Notification';
import { useState } from 'react';

export const Footer = ({ className, ...props }: FooterProps) => {
	const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<ISubscriptionForm>();

    const [notificationVisible, setNotificationVisible] = useState(false);

    const onSubmit: SubmitHandler<ISubscriptionForm> = data => {
        if (data.email) {
            setNotificationVisible(true);
            setTimeout(() => {
                setNotificationVisible(false);
                reset(); // Сбросить форму после уведомления
            }, 3000);
        }
    };
	return (
		<footer className={styles.footer} {...props}>
			<div className='container'>
				<div className={styles.top}>
					<div className={styles.menu}>
						<ul>
							<li>
								<a href='#'>КОНТАКТЫ</a>
							</li>
							<li>
								<a href='#'>УСЛОВИЯ ПОКУПКИ</a>
							</li>
							<li>
								<a href='#'>ДОСТАВКА И ВОЗВРАТ</a>
							</li>
						</ul>
					</div>
					<div className={styles.subscription}>
						<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
							<Input
								{...register('email', {
									required: { value: true, message: 'Напишите email' }
								})}
								error={errors.email}
								placeholder='Ваш email для акций и предложений'
							/>
							<button className={styles.btnSubmit}>
								<ArrowSubmitIcon />
							</button>
							{notificationVisible && (
                                <Notification>
									<CheckIcon/>
                                    Ваш email подписан на новости и уведомления
                                </Notification>
                            )}
						</form>
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.copyright}>© 2024 Shoppe</div>
					<div className={styles.socials}>
						<ul>
							<li>
								<a href=''>
									<InIcon />
								</a>
							</li>
							<li>
								<a href=''>
									<FacebookIcon />
								</a>
							</li>
							<li>
								<a href=''>
									<InstaIcon />
								</a>
							</li>
							<li>
								<a href=''>
									<TwitterIcon />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
