import '../styles/globals.css';
import 'highlight.js/styles/github-dark.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../lib/theme';
import Layout from '../components/Layout';
import MyContainer from '../components/MyContainer';
import Footer from '../components/Footer';

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider
			theme={theme}
			// resetCSS={false}
		>
			<Layout pathname={router.pathname}>
				<MyContainer px={3}>
					<Component {...pageProps} />
					<Footer />
				</MyContainer>
			</Layout>
		</ChakraProvider>
	);
}
