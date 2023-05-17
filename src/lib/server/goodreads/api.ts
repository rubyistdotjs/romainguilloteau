import { GOODREADS_API_KEY } from "$env/static/private";
import { parseStringPromise } from "xml2js";

export const parseResponse = <T>(data: string): T =>
  parseStringPromise(data, {
    trim: true,
    explicitRoot: false,
    explicitArray: false,
    ignoreAttrs: true,
  }) as T;

export const retrieve = async <T>(
  path: string,
  params?: Record<string, string | number>,
): Promise<T> => {
  const fetchParams = new URLSearchParams({
    ...params,
    key: GOODREADS_API_KEY,
  });

  const res = await fetch(`https://www.goodreads.com/${path}?${fetchParams}`, {
    method: "GET",
  });

  const data = await res.text();
  const parsedData = await parseResponse<T>(data);
  return parsedData;
};
