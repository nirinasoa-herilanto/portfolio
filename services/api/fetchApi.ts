export type FetchApiParams = {
  url: string;
  requestMethod?: string;
  cacheOptions?: RequestCache;
  bodyOptions?: BodyInit;
  nextOptions?: NextFetchRequestConfig;
};

/**
 * Use to fetch data by providing url endpoints
 * @param {string} url  endpoints, by default "/api/..."
 * @param {string} requestMethod  GET, POST, PUT, DELETE, PATCH by default GET
 * @param bodyOptions   body context
 * @param nextOptions   next context, allow us to enable ISR (revalidate)
 * @returns data
 */
export const fetchApi = async <T>({
  url,
  requestMethod,
  cacheOptions,
  bodyOptions,
  nextOptions,
}: FetchApiParams): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        method: requestMethod || 'GET',
      },
      ...(cacheOptions && { cache: cacheOptions }),
      ...(bodyOptions && { body: bodyOptions }),
      ...(nextOptions && { next: nextOptions }),
    });

    if (!response.ok) {
      throw new Error('Something went wrong, please try later!');
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(error?.message || error);
  }
};
