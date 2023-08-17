import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Subheader from '../../components/subheader/Subheader';
import './EmployeeDetails.css'
import { useParams } from 'react-router-dom';
import employeeData from '../Employees/Employee_data';
import DetailField from '../../components/detailfield/DetailField';
import { useGetEmployeeQuery } from './api';
const EmployeeDetails = () => {
    const { id }= useParams();
    // const employee= employeeData.find((emp)=>emp.id===Number(id))
    const {data} = useGetEmployeeQuery(id);
    const emp=data?.data;
    const fieldMap = [
        ['name', 'Name'],
        ['id', 'ID'],
        ['joiningDate', 'Joining Date'],
        ['Role', 'Role'],
        ['status', 'Status'],
        ['Experience', 'Experience']
      ];
      console.log(emp);
    const employee = {
        name : emp?.name,
        id :emp?.id,
        joiningDate:emp?.joining_date,
        Role:emp?.role,
        status:emp?.status,
        Experience:emp?.experience,



    }
    
return(
    <section className="employee-section">
            <Navbar/>
            
        <div className="employee-right">
            <Header/>
            <Subheader headerText='Employee List' icon='/assets/icons/edit.png' iconText='Edit' onclickfunc={()=>{}}/>
            <div className='employee-details'>
                {/* {Object.keys(employee).map((ele)=> <DetailField key={ele} detail={ele} value={employee[ele]}  />)} */}
                {fieldMap.map((ele)=> <DetailField key={ele[1]} detail={ele[1]} value={employee[ele[0]]}  />)}
            </div>
            



        </div>
        </section>
)
}
export default EmployeeDetails;