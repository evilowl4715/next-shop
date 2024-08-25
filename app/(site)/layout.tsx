import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

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
			<body className={DmSans.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
