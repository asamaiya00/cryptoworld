import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_KEY,
};

const createRequest = (url) => ({ url, headers: cryptoHeaders });

const baseUrl = 'https://coinranking1.p.rapidapi.com//';

export const cryptoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: 'cryptoApi',
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit) => createRequest(`/coins?limit=${limit}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history/?timePeriod=${timePeriod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
