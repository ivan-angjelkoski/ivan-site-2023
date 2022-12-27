import { extendTheme, Theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: Partial<Theme['config']> = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
	disableTransitionOnChange: false,
};
// const colors: Partial<Theme['colors']> = {};
const styles: Partial<Theme['styles']> = {
	global: (prop) => ({
		body: {
			bg: mode('gray.300', 'gray.800')(prop),
			color: mode('gray.900', 'gray.100')(prop),
		},
	}),
};
const fonts: Partial<Theme['fonts']> & { raleway: string } = {
	raleway: `'Raleway',Avenir,Helvetica,sans-serif`,
};

const theme = extendTheme({
	config,
	// colors,
	styles,
	fonts,
});

export default theme;
