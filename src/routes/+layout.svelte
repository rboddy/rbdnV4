<slot></slot>

<style>
    :global(:root){
        --text: #00031F;
        --primary: #0B5CFF;
        --secondary: #40B0F3;
        --ash: #ededed;
    }
    :global(body){
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: var(--ash);
    }
    :global(h1, h2, h3){
        font-family: 'Manrope', sans-serif;
        margin: 0;
    }
    :global(h1){
        font-size: 2.5rem;
        font-size: clamp(2.5rem, 2rem + 2.5vw, 5rem);
    }
</style>