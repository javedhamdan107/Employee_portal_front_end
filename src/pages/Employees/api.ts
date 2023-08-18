/* eslint-disable comma-dangle */
import baseApi from "../../services";

interface Address {
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}
interface Employee {
  name: string;
  id: number;
  joining_date: string;
  role: string;
  status: string;
  experience: string;
  username: string;
  departmentId: number;
  address: Address;
}

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<{ data: Employee[] }, void>({
      query: () => "/employees",
      providesTags: ["xyz"],
    }),
    deleteEmployee: builder.mutation<void, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["xyz"],
    })
  }),
});

export const {
  useGetEmployeeListQuery,
  useDeleteEmployeeMutation,
  useLazyGetEmployeeListQuery,
} = employeeApi;

export default employeeApi;
