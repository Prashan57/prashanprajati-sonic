// import { AppConstants } from "@/constants/constant";
import Image from "next/image";

import img from '../../public/assets/images/z-index.png'

export const HeroImagePopUp = () => {
  return (
    <div style={{backgroundColor:"white",
     position:"relative",
      // height:"100vh"
    }}
    >
    <div className="absolute flex flex-row justify-center inset-x-0 min-h-screen  " 
    
    >
      <Image
        src={img} 
        alt="heroImageCover"
        // layout="responsive"
        // height={300} width={300}
        // fill
        className="h-[300px] w-[300px] absolute lg:bottom-[30%] md:bottom-[20%] bottom-[20%]"
        
        style={{ objectFit: "contain" ,
          
         }}
      />
    </div>
    </div>
  );
};
