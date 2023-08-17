import baseApi from "../../services"

interface Address{
    address_line_1:string,
    address_line_2:string,
    city:string,
    state:string,
    country:string,
    pincode:string
}
interface Employee{
    name :string,
    id :number,
    joining_date:string,
    role:string,
    status:string,
    experience:string,
    username:string,
    departmentId:number
}

interface createEmployee{
    name :string,
    username:string,
    password:string,
    experience:number,
    departmentId:number,
    joining_date:string,
    role:string,
    status:string,
    
    address:Address
}
interface Department{
    id:number,
    name:string
}
interface Roles{
    data:string[]
}

interface editEmployeeBody{
    id:number,
    body:{
        name :string,
        username:string,
        password:string,
        experience:number,
        departmentId:number,
        joining_date:string,
        status:string,
        role:string,
        address:Address

    }

}

const employeeApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        createEmployee: builder.mutation<{data:Employee},createEmployee>({
            query:(body)=> ({
                url:'/employees',
                method:'POST',
                body
            })
           
        }),
        getAllDepartments: builder.query<{data:Department[]},void>({
            query:()=> '/department',
           
        }),
        getDepartment: builder.query<{data:Department},string>({
            query:(id)=> `/department/${id}`,
           
        }),
        getRoles: builder.query<{data:Roles},void>({
            query:()=> '/roles',
           
        }),
        editEmployee: builder.mutation<{data:Employee},editEmployeeBody>({
            query:(params)=> ({
                url:`/employees/${params.id}`,
                method:'PUT',
                body:params.body
            })
           
        }),

    })
});

export const { useCreateEmployeeMutation,useGetAllDepartmentsQuery,useGetDepartmentQuery,useEditEmployeeMutation,useGetRolesQuery} = employeeApi;

export default employeeApi;