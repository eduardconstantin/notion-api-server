import { Client } from '@notionhq/client';

export default async function handler(req, res) {
	const notion = new Client({
		auth: req.query.NOTION_TOKEN,
	});
	const database = await notion.databases.query({
		database_id: process.env.NOTION_DB,
	});

	return res.status(200).json(database.results);
}
