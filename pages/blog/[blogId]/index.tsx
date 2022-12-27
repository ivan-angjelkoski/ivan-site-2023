import { Post, User } from '.prisma/client';
import { Img } from '@chakra-ui/image';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { marked } from 'marked';
import React from 'react';
import { prisma } from '../../../lib/db';
import hljs from 'highlight.js';

type Props = {
	blog: Post & {
		User: User;
	};
};

const BlogPage = ({ blog }: Props) => {
	return (
		<Box>
			<Img
				w="full"
				src={blog.image}
				alt="blogimage"
				style={{ aspectRatio: '16/9' }}
				objectFit="cover"
			/>
			<Box
				my={5}
				borderBottom={'2px'}
				borderColor="blue.500"
			>
				<Heading>{blog.title}</Heading>
				<Text opacity={0.7}>
					By {blog.User.name} -{' '}
					{new Date(blog.publishedAt).toLocaleDateString('en-US', {
						dateStyle: 'medium',
					})}
				</Text>
			</Box>
			<Box>
				<div
					className="prose"
					dangerouslySetInnerHTML={{
						__html: marked(blog.content, {
							highlight: function (code, lang) {
								const language = hljs.getLanguage(lang) ? lang : 'javascript';
								return hljs.highlight(code, { language }).value;
							},
						}),
					}}
				></div>
			</Box>
		</Box>
	);
};

export default BlogPage;

// export const getServerSideProps = async ({
export const getStaticProps = async ({
	params,
}: {
	params: { blogId: string };
}) => {
	const blog = await prisma.post.findUnique({
		where: {
			id: params.blogId,
		},
		include: {
			User: true,
		},
	});
	return {
		props: {
			blog: JSON.parse(JSON.stringify(blog)),
		},
	};
};

export const getStaticPaths = async () => {
	const blogs = await prisma.post.findMany({ include: { User: true } });
	const paths = blogs.map((blog) => ({ params: { blogId: blog.id } }));
	return {
		paths,
		fallback: 'blocking',
	};
};
