import axios from "axios";
import { useEffect, useState } from "react";

const useCustomHook = (endpoint: string) => {
  const [dataState, setDataState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const response = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(endpoint, {
          headers: { withCredentials: true },
        });
        setDataState(data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };

    response();
  }, [endpoint]);

  return { dataState, loading, error };
};

export default useCustomHook;
