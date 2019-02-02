import React, { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await window.fetch(url);
      if (!res.ok) {
        setError(res.statusText);
      } else {
        setData(await res.json());
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}

const Fetch = () => {
  const { error, loading, data, refetch } = useFetch(
    "https://swapi.co/api/people/2/",
  );

  if (error) {
    return <h2>Error occurred!</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <button onClick={refetch}>Refetch data</button>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
};

export default Fetch;
