import { WorkListVariables } from "@/constants/constant";
import { GridViewForWorkList } from "./GridViewForWorkList";

export const WorkList = () => {
  return (
    <div className="relative mt-16">
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
      {/* <hr className="mx-8"/> */}
    </div>
  );
};
