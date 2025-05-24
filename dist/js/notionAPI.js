const NOTION_API_KEY = 'ntn_Z36399877156h5eenHDf6OZsUZ37dKXcCx1Lc5cPF7P7tE'; // Replace with your actual Notion API key
const NOTION_DATABASE_ID = '1240d8f5ce0380518daadb06562d92f2';
async function testNotionConnection() {
    console.log("Testing Notion connection...");
    try {
        const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${NOTION_API_KEY}`,
                'Notion-Version': '2022-06-28'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Notion connection successful:", data);
    } catch (error) {
        console.error("Notion connection failed:", error);
    }
}

async function fetchBlogPosts() {
    console.log("Fetching blog posts from Notion...");
    try {
        const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${NOTION_API_KEY}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        console.log("Notion API response status:", response.status);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const data = await response.json();
        console.log("Raw Notion data:", JSON.stringify(data, null, 2));

        if (!data.results || data.results.length === 0) {
            console.warn("No results found in Notion response");
            return [];
        }

        return data.results.map(page => {
            console.log("Processing page:", page);
            return {
                id: page.id,
                title: page.properties.Title?.title[0]?.plain_text || 'Untitled',
                tags: page.properties.Tags?.multi_select?.map(tag => tag.name) || [],
                description: page.properties.Description?.rich_text[0]?.plain_text || '',
                image: page.properties.Image?.files[0]?.file?.url || "/api/placeholder/500/300"
            };
        });
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        throw error;
    }
}
window.fetchBlogPosts = fetchBlogPosts;

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', testNotionConnection);