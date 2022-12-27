// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await res.revalidate(`/blog/`);
	const id = req.query.id;
	if (!id) {
		res.status(200).json({ message: 'Error' });
	} else if (typeof id == 'string') {
		await res.revalidate(`/blog/${id}`);
		res.json({ revalidated: true });
	} else {
		await res.revalidate(`/blog/${id[0]}`);
		res.status(200).json({ revalidated: req.query });
	}
}
