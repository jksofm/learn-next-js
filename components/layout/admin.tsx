
import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';



export function AdminLayout (props: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Link href="/">

       <a>Home</a>
      </Link>
      <Link href="/about">

<a>About</a>
</Link>
<Link href="/posts">

<a>Post List</a>
</Link>
      
      {props.children}
    </div>
  );
}
