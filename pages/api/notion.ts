import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const tableFilter: any = req.body || undefined;
	const databaseID: string = process.env.NOTION_DB!;
	const notion = new Client({
		auth: req.query.NOTION_TOKEN as string,
	});

	let database = await notion.databases.query({
		database_id: databaseID,
		filter: tableFilter,
	});

	const { results } = database;

	while (database.has_more) {
		database = await notion.databases.query({
			database_id: databaseID,
			filter: tableFilter,
			start_cursor: database.next_cursor!,
		});

		results.push(...database.results);
	}

	return res.status(200).json(results);
}
