<script>
    import ArticleIndex from "../lib/components/articleIndex.svelte";
    import Banner from "../lib/components/banner.svelte";

    export let data;

</script>
<Banner />
<ArticleIndex articles={data.posts}/>