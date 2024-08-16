import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const DmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next Shop',
	description: 'Main first shop'
};

export default function RootLayout({
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
