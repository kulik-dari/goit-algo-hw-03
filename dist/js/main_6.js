console.log("main.js is running");

document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM fully loaded and parsed");
    try {
        console.log("About to fetch blog posts");
        const blogPosts = await fetchBlogPosts();
        console.log("Fetched blog posts:", blogPosts);

        const leftMarquee = document.getElementById('marquee-left');
        const rightMarquee = document.getElementById('marquee-right');

        console.log("Left marquee element:", leftMarquee);
        console.log("Right marquee element:", rightMarquee);

        if (!leftMarquee || !rightMarquee) {
            console.error("Marquee elements not found in the DOM");
            return;
        }

        if (blogPosts.length === 0) {
            console.warn("No blog posts were fetched");
            leftMarquee.innerHTML = '<p>No blog posts available.</p>';
            return;
        }

        blogPosts.forEach((post, index) => {
            console.log(`Creating blog card for post ${index + 1}:`, post);
            const blogCard = createBlogCard(post);
            console.log(`Created blog card element:`, blogCard);
            if (index < 4) {
                leftMarquee.appendChild(blogCard);
                console.log(`Appended to left marquee`);
            } else if (index < 8) {
                rightMarquee.appendChild(blogCard);
                console.log(`Appended to right marquee`);
            }
        });

        console.log("Finished adding blog posts to the DOM");
    } catch (error) {
        console.error('Error in main script:', error);
    }
});

function createBlogCard(post) {
    console.log("Creating blog card for:", post.title);
    const blogCard = document.createElement('a');
    blogCard.className = 'blog-card';
    blogCard.href = `blog-post.html?id=${encodeURIComponent(post.id)}`;

    blogCard.innerHTML = `
        <figure class="card-banner">
            <img src="${post.image}" alt="${post.title}">
        </figure>
        <div class="card-content">
            <div class="card-tags">
                ${post.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
            </div>
            <h3 class="card-title">${post.title}</h3>
            <p class="card-text">${post.description}</p>
        </div>
    `;

    console.log("Created blog card HTML:", blogCard.outerHTML);
    return blogCard;
}