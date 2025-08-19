import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_SECRET,
})

const databaseId = process.env.NOTION_DATABASE_ID

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{ property: 'Date', direction: 'ascending' }],
    })

    // Ensure response.results is an array
    const results = Array.isArray(response.results) ? response.results : []

    const events = results.map((page) => {
      const { Name, Description, Date, Time, Location, Image } = page.properties

      return {
        id: page.id,
        name: Name?.title?.[0]?.plain_text || 'Untitled Event',
        description: Description?.rich_text?.[0]?.plain_text || '',
        date: Date?.date?.start || null,
        time: Time?.rich_text?.[0]?.plain_text || null,
        location: Location?.rich_text?.[0]?.plain_text || null,
        image:
          Image?.files?.[0]?.external?.url ||
          Image?.files?.[0]?.file?.url ||
          null,
      }
    })

    res.status(200).json(events)
  } catch (error) {
    console.error('Notion API error:', error)
    res.status(500).json({ error: 'Failed to fetch events from Notion' })
  }
}
