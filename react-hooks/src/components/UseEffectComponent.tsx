import { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((seconds) => seconds + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return <div>{val}</div>;
};

export default UseEffectComponent;
