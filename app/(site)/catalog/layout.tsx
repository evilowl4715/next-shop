import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import '@/app/(site)/globals.css';

const DmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Каталог',
	description: 'Каталог'
};

export default function CatalogLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={DmSans.className}>{children}</body>
		</html>
	);
}
