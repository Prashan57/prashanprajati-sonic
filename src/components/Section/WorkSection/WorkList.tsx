import { WorkListVariables } from "@/constants/constant";
import { GridViewForWorkList } from "./GridViewForWorkList";

export const WorkList = () => {
  return (
    <div className="relative ">
      {WorkListVariables.map((item, index) => (
        <GridViewForWorkList
          key={index}
          name={item.name}
          altName={item.altName}
          description={item.description}
          imageUrl={item.imageUrl}
          visitPageUrl={item.visitPageUrl}
        />
      ))}
    </div>
  );
};
