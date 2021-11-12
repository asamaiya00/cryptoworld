import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_KEY,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

export const cryptoNewsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "cryptoNewsApi",
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
