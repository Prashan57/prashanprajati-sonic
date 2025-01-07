import { HeaderForWorkTab } from "../HeaderForWorkTab";
import { WorkList } from "./WorkList";

export const WorkHeader = () => {
  return (
    <div>
      <div>
        <HeaderForWorkTab />
      </div>
      <div>
        <WorkList />
      </div>
    </div>
  );
};
