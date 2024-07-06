<script>
    export let articles = [
        {
            "title": "Blog Title",
            "excerpt": "Hello World! This is a blog post!",
            "featuredImage": {
                "url": "https://images.unsplash.com/photo-1633355444132-695d5876cd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
            }, 
            "slug": "/article"
        }
    ]
</script>

<div class="article-index-container">
    <div class="article-grid">
        {#each articles as article}
            <div class="article-card">
                <img src={article.featuredImage?.url} alt="Article">
                <div>
                    <h2>{article.title}</h2>
                    <div class="excerpt">{@html article.excerpt}</div>
                    <a href={article.slug}>Read More</a>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .article-index-container {
        padding: 50px 0px;
        background-color: var(--ash);
        margin-top: 40vh;
    }
    .article-grid {
        width: 83%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3vmax;
    }
    .article-grid > div {
        min-width: 300px;
    }
    .article-card {
        background-color: #fff;
        padding: 2vmax;
        box-sizing: border-box;
        border-radius: 15px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    img {
        width: 100%;
        border-radius: 15px;
    }
    h2 {
        color: var(--primary);
        margin: 15px 0px;
    }
    .excerpt {
        color: var(--text);
    }
    a {
        color: var(--text);
        text-decoration: none;
        background-color: var(--secondary);
        box-sizing: border-box;
        padding: 10px 20px;
        border-radius: 5px;
        display: block;
        margin-top: 15px;
        width: 50%;
        /* color: #fff; */
        font-weight: bold;
        text-align: center;
    }
    @media(max-width: 850px){
        .article-grid {
            grid-template-columns: 1fr;
        }
        a {
            width: 100%;
        }
    }
</style>
