import { useState } from "react";

const Counter = (WrappedComponent) => {
  // common function for A and B--------------
  function Counter(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <WrappedComponent count={count} increment={increment} {...props} />
      </div>
    );
  }

  return Counter;
};

export default Counter;
