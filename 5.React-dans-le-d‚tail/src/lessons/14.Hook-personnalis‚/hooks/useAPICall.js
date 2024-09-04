import { useState, useEffect } from "react";

export default function useAPICall() {
  const [catData, setcatData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        console.log(response);
        if(!response.ok) {
          throw new Error()
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setcatData(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  return { catData, error, loading };
}
