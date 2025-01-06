import { AppConstants, WorkTabVariables } from "../../constants/constant";
import { MyButton } from "../MyButton";

export const HeaderForWorkTab = () => {
  return (
    <div>
      <div>Recent Works</div>
      <div>
        {AppConstants.WorkTabVariablesStatus &&
          WorkTabVariables.map((item, index) => (
            <MyButton key={index} name={item.name} />
          ))}
      </div>
    </div>
  );
};
