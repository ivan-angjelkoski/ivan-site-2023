import { Post, User } from '.prisma/client';
import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import BlogItem from '../../components/BlogItem';
import { prisma } from '../../lib/db';

type Props = {
	blogs: (Post & { User: User })[];
};

const BlogsPage = ({ blogs }: Props) => {
	return (
		<Box>
			<Heading my={5}>Blogs</Heading>
			<Box>
				{blogs.map((blog) => (
					<BlogItem
						key={blog.id}
						blog={blog}
					/>
				))}
			</Box>
		</Box>
	);
};

export default BlogsPage;

export const getStaticProps = async () => {
	const blogs = await prisma.post.findMany({
		include: { User: true },
		orderBy: {
			publishedAt: 'desc',
		},
	});
	return {
		props: {
			blogs: JSON.parse(JSON.stringify(blogs)),
		},
	};
};
