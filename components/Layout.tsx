import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import Navbar from './Navbar';

type Props = {
	children: ReactNode;
	pathname: string;
};
const variant = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 20 },
};

const variant2 = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const Layout = (props: Props) => {
	return (
		<div>
			<Navbar />
			<AnimatePresence
				mode="wait"
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<motion.div
					key={props.pathname}
					variants={variant2}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.4 }}
				>
					{props.children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Layout;
