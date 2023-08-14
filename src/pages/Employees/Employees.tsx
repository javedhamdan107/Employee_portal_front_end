import './Employees.css';
import { FC, useState } from "react";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Subheader from '../../components/subheader/Subheader';
import Status from '../../components/status/Status';
import employeeData from './Employee_data';
import { useNavigate } from 'react-router-dom';
import EditDelete from '../../components/editdelete/EditDelete';
// import Button from '../../components/button/Button';


const Employees :FC = () =>{
    const table_header=['Employee Name','Employee Id','Joining Date','Role','Status','Experience','Action']
    const [isDelete,setIsDelete]=useState(false);
    const navigate = useNavigate();
    const checkColumn = (emp,ele) => {
        
        if(ele!=='status')
        {
            return <td className='list-items'>{emp[ele]}</td>
        }
        else 
        return <td className=''><Status label={`${emp[ele]}`}/></td>
    }
    const handleclick = () =>{
        navigate('/employees/create');
    }
    const handleDeleteClick = ()=> setIsDelete(!isDelete);
    
    
    return(
        <section className="employee-section">
            <Navbar/>
            
        <div className="employee-right">
            <Header/>
            <Subheader headerText='Employee List' icon='assets/icons/plus.png' iconText='Create Employee' onclickfunc={handleclick}/>

            <div className='table-container'>
                <table className='table'>
                    <thead className='table-row-container'>
                        <tr className='table-header'>
                            {table_header.map((ele)=>{
                                return <th className='table-element'>{ele}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody className='table-row-container'>
                        {
                            employeeData.map((emp)=>{
                                return <tr onClick= {()=>{navigate(`/employees/${emp.id}`)}} className='table-row'>
                            {Object.keys(emp).map((ele)=> checkColumn(emp,ele))}
                                <td><EditDelete onclickfunc={handleDeleteClick}/></td>
                                </tr>
                            })
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
        
        </section>
    )
}
export default Employees;