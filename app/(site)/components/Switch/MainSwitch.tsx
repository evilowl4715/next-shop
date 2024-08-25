'use client';
import { Switch } from '@headlessui/react';
import { useState } from 'react';
import styles from './MainSwitch.module.css';
import cn from 'classnames'

export const MainSwitch = () => {
	const [enabled, setEnabled] = useState(false);
	return (
		<Switch
			checked={enabled}
			onChange={setEnabled}
			className={cn(styles.switch, {
                [styles.checked] : enabled
            })}
		>
			<span className={cn(styles.slider, {
                [styles.checked] : enabled
            })} />
		</Switch>
	);
};
