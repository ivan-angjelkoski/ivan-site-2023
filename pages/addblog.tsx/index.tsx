import React, { useState } from 'react';
import { Post } from '@prisma/client';
import MyContainer from '../../components/MyContainer';
import {
	Button,
	FormLabel,
	Heading,
	VStack,
	Input,
	Textarea,
	Box,
} from '@chakra-ui/react';
type Props = {};

const AddBlogPage = (props: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSubmited, setIsSubmited] = useState(false);
	const [data, setData] = useState({
		title: '',
		description: '',
		image: '',
		content: '',
	});
	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const addPost = async (data: Partial<Post>) => {
		setIsLoading(true);
		setIsError(false);
		setIsSubmited(false);
		try {
			const req = await fetch(`/api/addblog`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/JSON',
				},
				body: JSON.stringify(data),
			});
			console.log(req);

			if (!req.ok) {
				throw new Error('Failed');
			}
			setIsSubmited(true);
		} catch (e) {
			setIsError(true);
			setIsSubmited(false);
		} finally {
			setIsLoading(false);
		}
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addPost(data);
	};
	return (
		<MyContainer>
			<Heading>Add Blog</Heading>
			<form onSubmit={handleSubmit}>
				<VStack my={3}>
					<Box alignSelf={'start'}>
						<FormLabel htmlFor="title">Title:</FormLabel>
					</Box>
					<Input
						variant="filled"
						onChange={handleChange}
						value={data.title}
						type="text"
						name="title"
						id="title"
						required
						minLength={3}
					/>
				</VStack>
				<VStack my={3}>
					<Box alignSelf={'start'}>
						<FormLabel htmlFor="description">Description:</FormLabel>
					</Box>
					<Input
						variant="filled"
						onChange={handleChange}
						value={data.description}
						type="text"
						name="description"
						id="description"
						required
						minLength={3}
					/>
				</VStack>
				<VStack my={3}>
					<Box alignSelf={'start'}>
						<FormLabel htmlFor="image">Image:</FormLabel>
					</Box>
					<Input
						variant="filled"
						onChange={handleChange}
						value={data.image}
						type="text"
						name="image"
						id="image"
						required
						minLength={3}
					/>
				</VStack>
				<VStack my={3}>
					<Box alignSelf={'start'}>
						<FormLabel htmlFor="content">Content:</FormLabel>
					</Box>
					<Textarea
						variant="filled"
						onChange={handleChange}
						value={data.content}
						className="p-5"
						name="content"
						id="content"
						required
						rows={20}
						minLength={10}
					/>
				</VStack>
				<VStack
					my={3}
					alignItems="stretch"
				>
					<Button
						type="submit"
						className="p-2 rounded-md border border-blue-300 block w-full my-2"
					>
						{isLoading ? 'Loading..' : isSubmited ? 'Submited!' : 'Add'}
					</Button>
				</VStack>
			</form>
		</MyContainer>
	);
};

export default AddBlogPage;
