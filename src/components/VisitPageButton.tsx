'use client'

import { useRouter } from "next/navigation";
import {  } from "react";

interface MyVisitPageButtonProps {
    name: string;
    visitURL : string
  }
  
  export const MyVisitPageButton: React.FC<MyVisitPageButtonProps> = ({ name,visitURL }) => {
    const router = useRouter();
    return (
      <button onClick={()=>router.push(visitURL)}
      className="p-4 gap-2 m-4 outline outline-1 outline-offset-2 sm:p-3 lg:px-8 rounded-full mx-3 font-semibold">
        {name} 
      </button>
    );
  };
  