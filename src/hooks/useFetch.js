import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(
    () => {
      if (!url) return;
      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      };
      fetchData();
    },
    [url]
  );

  return { data };
}

export default useFetch;
