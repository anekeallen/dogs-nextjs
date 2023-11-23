'use client';
import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState<DataContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url: string, options: RequestInit | undefined) => {
      let response;
      let json;
      // let json: Photo[] | null = [];

      try {
        setError(null);
        setLoading(true);

        response = await fetch(url, options);

        // console.log(  response)

        json = await response.json();

        console.log(json);

        if (response.ok === false) throw new Error(json.message);
      } catch (error) {
        json = null;
        console.log(error);
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setData(json);
        setLoading(false);

        return { response, json };
      }
    },
    []
  );

  return {
    data,
    error,
    loading,
    request
  };
};

export default useFetch;
