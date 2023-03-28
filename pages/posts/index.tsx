import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface PostListPageProps {
    posts : any[]
}

export default function App ({posts}: PostListPageProps) {
    console.log(posts)
  return (
    <>
    <h1>POST LIST</h1>
        <ul>
      {/* {posts.map((item)=><li>{item.name}</li>)} */}
      {posts.map(post=><li key={post.id}>{post.name}</li>)}
    </ul>
    </>

  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context : GetStaticPropsContext) =>{

    const response = await fetch("https://api.kame.asia/api/project/product/kame-product/0/9?page=1");
    const data = await response.json();
    console.log(data)

    return {
            props : {
                posts: [...data.products]
            }
    }
}

