import { useState } from "react";

export const useFetching = (callback: () => void): [() => void, string] => {
  const [error, setError] = useState<string>('');

  const fetching = async () => {
    try {
      await callback();
    } catch (error) {
      setError(JSON.stringify(error));
    }
  }

  return [ fetching, error ];
}