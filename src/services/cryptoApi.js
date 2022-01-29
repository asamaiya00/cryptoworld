import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {
  'x-rapidapi-host': 'cryptocurrency-markets.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_KEY,
};

const createRequest = (url) => ({ url, headers: cryptoHeaders });

const baseUrl = 'https://cryptocurrency-markets.p.rapidapi.com/';

export const cryptoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: 'cryptoApi',
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => createRequest(`/general/global_matric`),
    }),
    getCryptos: builder.query({
      query: () => createRequest(`/coins?page=1`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/profile/?=${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history/${timePeriod}`),
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
  useGetStatsQuery,
} = cryptoApi;
