import { GraphQLClient, gql } from 'graphql-request'
import { API_ENDPOINT } from '$env/static/private'
import { error } from '@sveltejs/kit';

const client = new GraphQLClient(API_ENDPOINT)


export async function load({ params }){
    const postsQuery = gql`
    query getPostBySlug($slug: String){
        posts(where: {slug: $slug}) {
          title
          content {
            html
          }
          slug
          featuredImage {
            url
          }
        }
      }
    `

    let variables = {
        "slug": params.slug
    }

    let response = await client.request(postsQuery, variables).then((data) => {
        return data
    })

    if(response.posts.length == 0){
        throw error(404, {
            message: 'Not found'
        });
    }

    return {
        posts: response.posts
    }
}