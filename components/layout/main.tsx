
import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';



export function MainLayout (props: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <Link passHref href="/">

       <a style={{marginRight:"20px"}}>Home</a>
      </Link>

      <Link passHref  href="/about">

<a style={{marginRight:"20px"}}>About</a>
</Link>

<Link passHref  href="/posts">

<a style={{marginRight:"20px"}}>Post List</a>
</Link>
<>
{props.children}
</>
      
     
    </div>
  );
}
