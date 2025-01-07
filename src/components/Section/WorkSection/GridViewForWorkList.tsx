import { MyButton } from "@/components/MyButton";
import Image from "next/image";

interface GridViewProps {
  name: string;
  description: string;
  imageUrl: string;
  visitPageUrl: string;
  altName: string;
}

export const GridViewForWorkList: React.FC<GridViewProps> = ({
  name,
  description,
  imageUrl,
  visitPageUrl,
  altName,
}) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mx-16 my-5">
        <div className="col-span-2 ">
          <Image
            src={imageUrl}
            alt={altName}
            height={500}
            width={1000}
            style={{ objectFit: "cover", borderRadius: "20px" }}
          />
          {/* hello */}
        </div>
        <div className="container flex flex-col pl-8 pt-8">
          <div className="text-2xl font-bold flex flex-s pl-3">{name}</div>
          <div className="mt-6 pl-3">{description}</div>
          <div className="mt-8">
            <MyButton name={visitPageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};
