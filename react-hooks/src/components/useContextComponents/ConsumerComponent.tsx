import { useContext } from "react";
import UserContext from "../../store/ctx";

const ConsumerComponent = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
};

export default ConsumerComponent;
