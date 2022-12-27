import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Collapse,
	Heading,
	HStack,
	IconButton,
	IconButtonProps,
	Show,
	useColorModeValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import MyContainer from './MyContainer';
import TypewriterHeading from './TypewriterHeading';

type Props = {};

type NavLink = {
	label: string;
	href: string;
};

const links: NavLink[] = [
	{
		label: ' Home',
		href: '/',
	},
	{
		label: ' Contact',
		href: '/contact',
	},
	{
		label: ' Blog',
		href: '/blog',
	},
];

const Navbar = (props: Props) => {
	const router = useRouter();
	const { isOpen, onToggle, onClose } = useDisclosure();

	useEffect(() => {
		onClose();
	}, [router.pathname, onClose]);
	return (
		<Box
			// backdropFilter="blur(6px)"
			bg={useColorModeValue('gray.300', 'gray.800')}
			position={'sticky'}
			top={0}
			zIndex={10}
			transition="background 0.2s"
			// shadow="md"
		>
			<MyContainer>
				<HStack
					justifyContent={'space-between'}
					p={3}
				>
					<TypewriterHeading />
					<HStack>
						<DarkModeSwitch />
						<Show above="md">
							<DesktopLinks />
						</Show>
						<Show below="md">
							<HamburgerButton
								aria-label="menu"
								onClick={onToggle}
							/>
						</Show>
					</HStack>
				</HStack>
			</MyContainer>
			<Show below="md">
				<Collapse
					animateOpacity
					in={isOpen}
				>
					<MyContainer
						onClick={onClose}
						p={3}
					>
						<MobileLinks />
					</MyContainer>
				</Collapse>
			</Show>
		</Box>
	);
};

const DesktopLinks = () => {
	const colorScheme = useColorModeValue('gray', 'blue');
	return (
		<HStack>
			{links.map((link) => (
				<Button
					key={link.href}
					as={Link}
					href={`${link.href}`}
					variant="ghost"
					// size="sm"
					fontWeight={'400'}
					colorScheme={colorScheme}
				>
					{link.label}
				</Button>
			))}
		</HStack>
	);
};
const MobileLinks = () => {
	return (
		<VStack
			alignItems="stretch"
			p={2}
			bg={useColorModeValue('gray.500', 'gray.900')}
			rounded="md"
		>
			{links.map((link) => (
				<Button
					key={link.href}
					as={Link}
					href={`${link.href}`}
				>
					{link.label}
				</Button>
			))}
		</VStack>
	);
};

const HamburgerButton = (props: IconButtonProps) => {
	return (
		<IconButton
			{...props}
			variant={'outline'}
			colorScheme={useColorModeValue('blue', 'green')}
			icon={<HamburgerIcon />}
		/>
	);
};

export default Navbar;
