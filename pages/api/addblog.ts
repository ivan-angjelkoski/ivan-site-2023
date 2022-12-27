// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Post } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/db';

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const dataApi: Partial<Post> = req.body;
	console.log('API:', dataApi);

	if (
		dataApi.content &&
		dataApi.title &&
		dataApi.description &&
		dataApi.image
	) {
		const post = await prisma.post.create({
			data: {
				authorId: '1991258a-c16b-4961-89b1-80b6d727e49f',
				content: dataApi.content,
				title: dataApi.title,
				description: dataApi.description,
				image: dataApi.image,
				published: true,
			},
		});
		await res.revalidate('/blog');

		res.status(200).json(post);
	} else {
		res.status(400).json({ message: 'No Data' });
	}
}
