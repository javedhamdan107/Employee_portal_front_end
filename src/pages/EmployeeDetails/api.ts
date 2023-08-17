import baseApi from "../../services"

interface Address{
    address_line_1:string;
    address_line_2:string;
    city:string;
    state:string;
    country:string;
    pincode:string;
}
interface Employee{
    name :string;
    id :number;
    joining_date:string;
    role:string;
    status:string;
    experience:string;
    username:string;
    departmentId:number;
    address:Address;
}


const employeeApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getEmployee: builder.query<{data:Employee},string>({
            query:(id)=> `/employees/${id}`,
        })
    })
});

export const { useGetEmployeeQuery,useLazyGetEmployeeQuery} = employeeApi;

export default employeeApi;