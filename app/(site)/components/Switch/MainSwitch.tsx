'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Switch } from '@headlessui/react';
import styles from './MainSwitch.module.css';
import cn from 'classnames';

export const MainSwitch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [enabled, setEnabled] = useState(searchParams.get('discounted') === 'true');

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());

    if (enabled) {
      query.set('discounted', 'true');
    } else {
      query.delete('discounted'); 
    }

    router.push(`?${query.toString()}`);
  }, [enabled, router, searchParams]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={cn(styles.switch, { [styles.checked]: enabled })}
    >
      <span className={cn(styles.slider, { [styles.checked]: enabled })} />
    </Switch>
  );
};