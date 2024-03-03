import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CAT, baseUrl, latestSale } from "../../../Api/Api";

export const productsApi = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/` }),
  endpoints: (builder) => ({
    getProductsData: builder.query({
      query: () => {
        return {
          // baseUrl/latest-sale
          url: `${latestSale}`,
        };
      },
    }),
    getCategoryData: builder.query({
      query: () => {
        return {
          // baseUrl/CAT
          url: `${CAT}`,
        };
      },
    }),
  }),
});

export const { useGetProductsDataQuery, useGetCategoryDataQuery } = productsApi;

// builder.mutation => POST , PUT , DELETE
// builder.query => GET
