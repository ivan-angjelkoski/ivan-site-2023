import {
	Box,
	Button,
	Heading,
	HStack,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import MyContainer from '../components/MyContainer';
import { FaReact, FaNode } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {
	SiApollographql,
	SiTailwindcss,
	SiMongodb,
	SiPrisma,
	SiChakraui,
	SiRedux,
	SiFramer,
	SiExpress,
} from 'react-icons/si';

const icons = [
	FaReact,
	SiRedux,
	TbBrandNextjs,
	SiMongodb,
	FaNode,
	SiExpress,
	SiTailwindcss,
	SiPrisma,
	SiChakraui,
	SiFramer,
	SiApollographql,
];

type Props = {};

const IndexPage = (props: Props) => {
	return (
		<Box>
			<Heading
				bgGradient="linear(to-l, #7928CA, #80b3f1)"
				bgClip="text"
				size="3xl"
				my={5}
			>
				Welcome
			</Heading>
			<Stack
				borderBottom={'2px'}
				borderColor="blue.300"
				flexDirection={{ base: 'column-reverse', md: 'row' }}
				alignItems="center"
				mb={10}
			>
				<Text
					fontSize={'xl'}
					fontFamily="raleway"
				>
					My name is Ivan Angjelkoski and i am a front-end web developer with a
					solid background in JavaScript frameworks like React and Next.js and
					is also familiar with the MERN (MongoDB, Express, React, and Node.js)
					software stack. Currently Living In 🇲🇰 Macedonia.
				</Text>
				<VStack
					flexShrink={0}
					p={5}
				>
					<Box
						height={{ base: '150px', sm: '200px' }}
						width={{ base: '150px', sm: '200px' }}
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
			</Stack>
			<Heading opacity={0.8}>Skills</Heading>
			<HStack
				wrap={'wrap'}
				justifyContent="center"
				opacity={0.7}
			>
				{icons.map((Icon, i) => (
					<Box
						key={i}
						fontSize="6xl"
						p={5}
					>
						<Icon />
					</Box>
				))}
			</HStack>
			<Box fontSize="xl">
				<Text
					my={5}
					fontSize="inherit"
				>
					I am a highly skilled programmer with a diverse range of technical
					expertise. In my previous roles, I have gained significant experience
					using a variety of programming languages and frameworks, including
					React, NextJS, Express, MongoDB, SQL, Prisma, Tailwindcss, Chakraui,
					and GraphQL.
				</Text>
				<Text
					my={5}
					fontSize="inherit"
				>
					Starting with React, I have a strong understanding of the library's
					core principles and have used it to build dynamic, responsive user
					interfaces for a variety of web applications. I am well-versed in
					using state management libraries such as Redux or Context API to
					manage application state in a scalable and maintainable way.
				</Text>
				<Text
					my={5}
					fontSize="inherit"
				>
					I have also gained experience working with NextJS, a framework that
					allows developers to build server-rendered React applications with
					automatic code splitting and optimized performance. This has allowed
					me to create applications that are both fast and easy to maintain.
				</Text>
				<Text
					my={5}
					fontSize="inherit"
				>
					In addition to my experience with front-end technologies, I have a
					strong background in back-end development. I have used Express to
					build scalable APIs and have experience with MongoDB and SQL for
					storing and querying data. I have also used Prisma and Mongoose, to
					simplify database interactions and make it easier to build efficient
					and flexible APIs.
				</Text>
				<Text
					my={5}
					fontSize="inherit"
				>
					I have a solid understanding of design principles and have used
					Tailwindcss and Chakraui to create visually appealing and
					user-friendly applications. I have also used GraphQL to build flexible
					and efficient APIs, allowing for streamlined data fetching and
					manipulation.
				</Text>
				<Text my={5}>
					In summary, my skills in React, NextJS, Express, MongoDB, SQL, Prisma,
					Tailwindcss, Chakraui, and GraphQL have allowed me to build a wide
					range of web applications and APIs, and I am confident in my ability
					to continue learning and growing as a programmer.
				</Text>
			</Box>
		</Box>
	);
};

export default IndexPage;
