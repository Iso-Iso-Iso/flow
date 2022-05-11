import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/user" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => ({ url: "", method: "POST", body }),
    }),
  }),
});

export default userApi;

export const { useRegisterUserMutation } = userApi;
