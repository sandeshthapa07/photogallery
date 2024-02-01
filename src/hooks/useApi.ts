// useApi.ts
import { useState, useEffect } from "react";

interface ApiResponse<T> {
  loading: boolean;
  error: Error | null;
  data: T | null;
}

const useApi = <T>(apiFunction: () => Promise<T>): ApiResponse<T> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFunction();
        setData(response); // Adjust this based on your API response structure
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiFunction]);

  return { loading, error, data };
};

export default useApi;
