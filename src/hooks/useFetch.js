import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(
    () => {
      if (!url) return;
      const fetchData = async () => {
        setHasError(false);
        setIsLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setHasError(true);
          console.log(error);
        }
      };
      fetchData();
    },
    [url]
  );

  return { data, isLoading, hasError };
}

export default useFetch;
