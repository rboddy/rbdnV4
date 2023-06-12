import { GraphQLClient, gql } from 'graphql-request'
import { API_ENDPOINT } from '$env/static/private'

const client = new GraphQLClient(API_ENDPOINT)


export async function load(){
    const postsQuery = gql`
    {
        posts {
          title
          excerpt
          slug
          featuredImage {
            url
          }
        }
      }
    `

    let response = await client.request(postsQuery).then((data) => {
        return data
    })

    return {
        posts: response.posts.reverse()
    }
}