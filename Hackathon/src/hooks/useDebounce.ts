import { useRef } from "react";

type useDebouncePropsType = {
  func: (url: string) => void;
  delay: number;
};

export default function useDebounce({ func, delay }: useDebouncePropsType) {
  const intervalRef = useRef<number | null>(null);

  return (url: string) => {
    if (intervalRef.current) clearTimeout(intervalRef.current);

    intervalRef.current = setTimeout(() => {
      func(url);
      console.log("haciendo llamada");
    }, delay);
  };
}
