import { Box, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaTwitter, FaPhone } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { IconType } from 'react-icons';

type Props = {};
type ContactType = {
	icon: IconType;
	label: string;
	href: string;
};

const contactLinks = [
	{
		icon: GoMail,
		label: 'ivanangelkoski95@gmail.com',
		href: 'mailto:ivanangelkoski95@gmail.com',
	},
	{
		icon: FaPhone,
		label: '+389-78-418-009',
		href: 'tel:+38978418009',
	},
	{
		icon: FaGithub,
		label: 'ivan-angjelkoski',
		href: 'https://github.com/ivan-angjelkoski',
	},
	{
		icon: FaTwitter,
		label: 'ivan_angjelkoski',
		href: 'https://twitter.com/ivan_angelkoski',
	},
];

function calculateAge(dateBorn: string) {
	const born = new Date(dateBorn).getTime();
	const now = Date.now();
	const age = new Date(now - born).getFullYear() - 1970;
	return age;
}

const ContactPage = (props: Props) => {
	return (
		<Box>
			<VStack
				px={4}
				py={8}
			>
				<Box
					width={'200px'}
					height="200px"
				>
					<Image
						src={'/ivan_ang.jpg'}
						width={300}
						height={300}
						style={{
							objectFit: 'cover',
							width: '100%',
							height: '100%',
							borderRadius: '50%',
						}}
						alt="Ivan Angjelkoski"
					/>
				</Box>
			</VStack>
			<VStack mb={10}>
				<Heading
					size="lg"
					fontFamily={'raleway'}
				>
					Ivan Angjelkoski,{calculateAge('1995-01-25')}
				</Heading>
				<Heading
					size="sm"
					fontWeight={'400'}
					fontFamily={'raleway'}
				>
					North Macedonia, Gostivar
				</Heading>
			</VStack>
			<Box>
				{contactLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						target="_blank"
						_hover={{ textDecoration: 'none', color: 'blue.400' }}
					>
						<HStack fontSize={{ base: 'lg', sm: '2xl' }}>
							<link.icon />
							<Text>{link.label}</Text>
						</HStack>
					</Link>
				))}
			</Box>
		</Box>
	);
};

export default ContactPage;
