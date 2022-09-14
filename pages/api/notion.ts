import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const notion = new Client({
		auth: req.query.NOTION_TOKEN as string,
	});

	const database = await notion.databases.query({
		database_id: process.env.NOTION_DB!,
		filter: req.body || undefined,
	});
	return res.status(200).json(database.results);
}
