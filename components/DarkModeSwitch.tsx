import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const variants = {
	initial: { opacity: 0, y: -20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 20 },
};

const DarkModeSwitch = () => {
	const { colorMode } = useColorMode();
	const { toggleColorMode } = useColorMode();
	return (
		<AnimatePresence
			mode="wait"
			initial={false}
		>
			<motion.div
				style={{ display: 'inline-block' }}
				key={colorMode}
				variants={variants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.2 }}
			>
				<IconButton
					aria-label="darkmode"
					variant={'solid'}
					colorScheme={useColorModeValue('blue', 'green')}
					onClick={toggleColorMode}
					icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
				/>
			</motion.div>
		</AnimatePresence>
	);
};

export default DarkModeSwitch;
