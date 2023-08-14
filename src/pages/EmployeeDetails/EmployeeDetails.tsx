import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Subheader from '../../components/subheader/Subheader';
import './EmployeeDetails.css'
import { useParams } from 'react-router-dom';
import employeeData from '../Employees/Employee_data';
import DetailField from '../../components/detailfield/DetailField';
const EmployeeDetails = () => {
    const { id }= useParams();
    const employee= employeeData.find((emp)=>emp.id===Number(id))
return(
    <section className="employee-section">
            <Navbar/>
            
        <div className="employee-right">
            <Header/>
            <Subheader headerText='Employee List' icon='/assets/icons/edit.png' iconText='Edit' onclickfunc={()=>{}}/>
            <div className='employee-details'>
                {Object.keys(employee).map((ele)=> <DetailField key={ele} detail={ele} value={employee[ele]}  />)}
            </div>
            



        </div>
        </section>
)
}
export default EmployeeDetails;