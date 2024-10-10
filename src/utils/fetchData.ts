import { API } from "../types";

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data: API = await response.json();
    return response.ok ? data : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
