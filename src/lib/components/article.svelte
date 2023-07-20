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
    function dateFormat(articleDate){
        let jsDate = new Date(articleDate);

        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

        let newDate = `${monthNames[jsDate.getMonth()]} ${jsDate.getUTCDate()}, ${jsDate.getFullYear()}`
        return(newDate);
    }
</script>

<div class="article-container">
    <div class="header">
        <div class="title-box">
            <h2>{article.title}</h2>
            <p>{dateFormat(article.updatedAt)}</p>
        </div>
        <div><img src={article.featuredImage.url} alt="Featured"></div>
    </div>
    <article>
        {@html article.content.html}
    </article>
</div>

<style>
    :global(img){
        width: 100%;
        height: auto;
    }
    :global(pre){
        background-color: aliceblue;
        border: 1px solid darkslateblue;
        border-radius: 5px;
        padding: 10px;
        box-sizing: border-box;
        overflow: scroll;
    }
    .article-container {
        width: 60%;
        margin: 50px auto;
    }
    .title-box {
        display: flex;
        flex-direction: column;
    }
    .header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5vw;
    }
    article {
        margin-top: clamp(1.875rem, 1.625rem + 1.25vw, 3.125rem);
        font-size: 18px;
        color: var(--text);
    }
    :global(article p){
        line-height: 180%;
        letter-spacing: .01em;
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