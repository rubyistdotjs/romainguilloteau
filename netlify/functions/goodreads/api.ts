import axios, { AxiosRequestConfig } from "axios";
import { parseStringPromise } from "xml2js";

const { GOODREADS_API_KEY } = process.env;

export const api = axios.create({ baseURL: "https://www.goodreads.com/" });
export const authParams = { key: GOODREADS_API_KEY };

export const parseResponse = <T>(res: { data: string }): T =>
  parseStringPromise(res.data, {
    trim: true,
    explicitRoot: false,
    explicitArray: false,
    ignoreAttrs: true,
  }) as T;

export const retrieve = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const params = { ...config?.params, ...authParams };
  const res = await api.get(url, { ...config, params });
  const json = await parseResponse<T>(res);

  return json;
};
