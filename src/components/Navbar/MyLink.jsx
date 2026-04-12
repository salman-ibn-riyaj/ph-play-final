'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({link}) => {

    const pathName = usePathname();

    const {href, text} = link;
    return (
        <Link href={href} className={pathName === href?'text-purple-500 underline':''}>
          {text}  
        </Link>
    );
};

export default MyLink;