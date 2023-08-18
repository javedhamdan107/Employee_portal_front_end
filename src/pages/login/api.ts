import baseApi from "../../services";
type loginPayLoadType = {
  username: string;
  password: string;
};
export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: loginPayLoadType) => ({
        url: "/employees/login",
        method: "POST",
        body,
      })
    }),
  })
});

export const { useLoginMutation } = loginApi;
