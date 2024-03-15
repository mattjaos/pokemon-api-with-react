import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // `setTimeout` invokes a function after after a duration,
    // runs only once, and returns an ID that `clearTimeout` can read to
    // to abort the `setTimeout`
    const timeoutID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Destory `timeoutID` if `value` or `delay` values change
    return () => {
      clearTimeout(timeoutID);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
