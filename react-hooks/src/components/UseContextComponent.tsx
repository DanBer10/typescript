import { useState } from "react";
import UserContext, { UserState } from "../store/ctx";
import ConsumerComponent from "./useContextComponents/ConsumerComponent";

const UseContextComponent = () => {
  const [name, setName] = useState<UserState>({
    first: "Danne",
    last: "Berra",
  });

  return (
    <UserContext.Provider value={name}>
      <ConsumerComponent />
      <button
        onClick={() =>
          setName({
            first: "hahah",
            last: "hehe",
          })
        }
      >
        Change name
      </button>
    </UserContext.Provider>
  );
};

export default UseContextComponent;
