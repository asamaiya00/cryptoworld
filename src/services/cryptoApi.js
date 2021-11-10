import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "4833128136msh96b9e5d7beb29bap134de2jsnf7a4b70bc6d3",
  "x-access-token": "i-have-to-migrate-to-v2",
};

const createRequest = (url) => ({ url, headers: cryptoHeaders });

const baseUrl = "https://coinranking1.p.rapidapi.com/";

export const cryptoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "cryptoApi",
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit) => createRequest(`/coins?limit=${limit}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
    getExchanges: builder.query({
      query: () =>
        createRequest(`/exchanges`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
