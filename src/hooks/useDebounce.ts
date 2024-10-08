import { useRef } from "react";
import { API } from "../types";

type useDebouncePropsType = {
  func: (url: string) => Promise<API | null>;
  delay: number;
};

export default function useDebounce({ func, delay }: useDebouncePropsType) {
  const intervalRef = useRef<number | null>(null);

  return (url: string): Promise<API | null> => {
    if (intervalRef.current) clearTimeout(intervalRef.current);

    return new Promise((resolve) => {
      intervalRef.current = setTimeout(() => {
        resolve(func(url));
      }, delay);
    });
  };
}
