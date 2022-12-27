import { Post, User } from '.prisma/client';
import { Box, Link, Text } from '@chakra-ui/layout';
import { default as NextLink } from 'next/link';
import React from 'react';

type Props = {
	blog: Post & { User: User };
};

const BlogItem = ({ blog }: Props) => {
	return (
		<Box marginY={10}>
			<Box
				borderBottom={'2px'}
				borderColor="blue.500"
			>
				<Link
					fontSize={'3xl'}
					as={NextLink}
					_hover={{ textDecoration: 'none', color: 'blue.400' }}
					href={`/blog/${blog.id}`}
				>
					{blog.title}
				</Link>
				<Text opacity={0.7}>
					By {blog.User.name} -{' '}
					{new Date(blog.publishedAt).toLocaleDateString('en-US', {
						dateStyle: 'medium',
					})}
				</Text>
			</Box>
			<Text py={3}>{blog.description}</Text>
		</Box>
	);
};

export default BlogItem;
