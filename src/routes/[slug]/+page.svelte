<script>
    import Article from "../../lib/components/article.svelte";
    import Nav from "../../lib/components/nav.svelte";

    export let data;

    console.log(data)

</script>
<Nav />
<Article article={data.posts[0]}/>