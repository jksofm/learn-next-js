import { GetStaticPaths, GetStaticProps, GetStaticPropsContext,GetStaticPathsContext } from 'next';
import * as React from 'react';

export interface PageSingleProps {
    post : any,
}

export default function PostDetailPage ({post}: PageSingleProps) {
  if(!post){
    return null;
  }
   
  return (
    <>
    <h1>{post.name}</h1>
    <p>
      <img src={post.image} />
    </p>
       
    </>

  );
}
export const getStaticPaths: GetStaticPaths = async () =>{
  const response = await fetch("https://api.kame.asia/api/project/product/kame-product/0/9?page=1");
  const data = await response.json();
  


   return {
    paths: data.products.map((item:any)=>({params: {postId : `${item.id}`} })),
    fallback: false,

   }
}
export const getStaticProps: GetStaticProps<PageSingleProps> = async (context : GetStaticPropsContext) =>{
  // console.log("")
const postId = context.params?.postId;
  if(!postId){
   return {
    notFound: true,
   }
  }

  const response = await fetch(`https://api.kame.asia/api/project/product/detail/kame-product/${context.params?.postId}`);
  // https://api.kame.asia/api/project/product/detail/kame-product/250
  const data = await response.json();
  // console.log(data)

  return {
          props: {
            post : data
          }
  }
}



