import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Something went wrong...');

  useEffect(
    () => {
      if (!url) return;
      const fetchData = async () => {
        setHasError(false);
        setIsLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.cod !== 200) throw new Error(`${data.cod}: ${data.message}`);
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setHasError(true);
          setErrorMessage(error.message);
          console.log(error);
        }
      };
      fetchData();
    },
    [url]
  );

  return { data, isLoading, hasError, errorMessage };
}

export default useFetch;
