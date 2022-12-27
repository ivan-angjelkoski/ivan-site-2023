import { Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { default as NextLink } from 'next/link';

type Props = {};

const TypewriterHeading = (props: Props) => {
	const [text] = useTypewriter({
		words: ['Ivan Angjelkoski', 'Developer'],
		loop: 0,
		delaySpeed: 4000,
	});
	return (
		<Link
			as={NextLink}
			href="/"
			_hover={{ textDecoration: 'none' }}
			size="lg"
			fontWeight={'500'}
			fontFamily={'raleway'}
		>
			&lt;{text}
			<Cursor /> &#47;&gt;
		</Link>
	);
};

export default TypewriterHeading;
