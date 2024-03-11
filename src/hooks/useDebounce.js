import { useState, useEffect } from "react";

export const useDebounce = (callback, delay = 500) => {
  const [debouncedCallback, setDebouncedCallback] = useState(callback);

  useEffect(() => {
    // `setTimeout` invokes a function after after a duration,
    // runs only once, and returns an ID that `clearTimeout` can read to
    // to abort the `setTimeout`
    const timeoutID = setTimeout(() => {
      setDebouncedCallback(callback);
    }, delay);

    // Destory `timeoutID` if `callback` or `delay` values change
    return () => {
      clearTimeout(timeoutID);
    };
  }, [callback, delay]);

  return debouncedCallback;
};
