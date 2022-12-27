import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
} & BoxProps;

const MyContainer = ({ children, ...props }: Props) => {
	return (
		<Box
			maxW="4xl"
			mx="auto"
			{...props}
		>
			{children}
		</Box>
	);
};

export default MyContainer;
