<script>
    export let article = {
        "title": "Testing Title",
        "content": {
            "html": "<p>Testing this out! This is an article</p>",
        },
        "featuredImage": {
            "url": "https://media.graphassets.com/X6NWrwlVTSWm4U8A7Fh5"
        }
    }
</script>

<div class="article-container">
    <div class="header">
        <div>
            <h2>{article.title}</h2>
        </div>
        <div><img src={article.featuredImage.url} alt="Featured"></div>
    </div>
    <article>
        {@html article.content.html}
    </article>
</div>

<style>
    .article-container {
        width: 60%;
        margin: 50px auto;
    }
    .header {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 5vw;
    }
    .header > div {
        display: flex;
        align-items: end;
    }
    article {
        margin-top: clamp(1.875rem, 1.625rem + 1.25vw, 3.125rem);
        font-size: 18px;
        color: var(--text);
    }
    img {
        width: 100%;
    }
    h2 {
        font-size: 1.875rem;
        font-size: clamp(1.875rem, 1.5rem + 1.875vw, 3.75rem);
    }
    @media(max-width: 850px){
        .header {
            grid-template-columns: 1fr;
        }
        .article-container {
            width: 85%;
        }
    }
</style>