<script>
    import Article from "../../lib/components/article.svelte";
    import Nav from "../../lib/components/nav.svelte";

    export let data;

    console.log(data)

</script>

<svelte:head>
    <meta property="og:title" content={data.posts[0].title}>
    <meta property="og:site_name" content="ryanboddy.net">
    <meta property="og:description" content={data.posts[0].excerpt}>
    <meta property="og:type" content="article">
    <meta property="og:image" content={data.posts[0].featuredImage.url}>
</svelte:head>

<Nav />
<Article article={data.posts[0]}/>