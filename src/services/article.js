import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "c332543540mshd1a3746da620f75p1318eejsn6f37a910d610");
      headers.set("X-RapidAPI-Host", "article-extractor-and-summarizer.p.rapidapi.com");
      return headers; // Return the modified headers object
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
