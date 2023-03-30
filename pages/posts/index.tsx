import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout';
export interface PostListPageProps {
    posts : any[]
}

export default function PostList ({posts}: PostListPageProps) {
    console.log(posts)
  return (
    <MainLayout>
    <h1>POST LIST</h1>
        <ul>
      {/* {posts.map((item)=><li>{item.name}</li>)} */}
      {posts.map(post=><li key={post.id}>
       
           <Link passHref href={`/posts/${post.id}`}>

            <a>
            {post.name}

            </a>
           </Link>
           
      

       
        </li>)}
    </ul>
    </MainLayout>

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

