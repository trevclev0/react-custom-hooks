import { useState } from 'react';

const useCounter = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal);

  const increaseCount = () => setCount((prevVal) => prevVal + 1);

  const decreaseCount = () => setCount((prevVal) => prevVal - 1);

  const resetCount = () => setCount(0);

  return {
    count, increaseCount, decreaseCount, resetCount,
  };
};

export default useCounter;
