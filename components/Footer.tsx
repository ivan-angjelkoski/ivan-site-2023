import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
	return (
		<Box mt={10}>
			<HStack
				justifyContent={'center'}
				p={4}
			>
				<Text>Ivan Angjelkoski - &copy; {new Date().getFullYear()}</Text>
			</HStack>
		</Box>
	);
};

export default Footer;
