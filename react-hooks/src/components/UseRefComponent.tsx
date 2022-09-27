import { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return <input ref={inputRef} />;
};

export default UseRefComponent;
