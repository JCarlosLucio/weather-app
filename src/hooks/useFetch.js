import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      if (!url) return;
      const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      };
      fetchData();
    },
    [url]
  );

  return { data, isLoading };
}

export default useFetch;
