import { useState, useEffect } from "react";

export const useDebounce = (callback, delay = 500) => {
  const [debouncedCallback, setDebouncedCallback] = useState(callback);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCallback(() => callback);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);

  return debouncedCallback;
};
