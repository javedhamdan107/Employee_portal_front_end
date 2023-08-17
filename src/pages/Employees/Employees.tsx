import './Employees.css';
import { FC, useEffect, useState } from "react";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Subheader from '../../components/subheader/Subheader';
import Status from '../../components/status/Status';
// import employeeData from './Employee_data';
import { useNavigate } from 'react-router-dom';
import EditDelete from '../../components/editdelete/EditDelete';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '../../components/popup/Popup';
import { deleteEmployee } from '../../actions/employeeActions';
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from './api';
import employeeData from './Employee_data';

// import Button from '../../components/button/Button';


const Employees :FC = () =>{
    
    const table_header=['Employee Name','Employee Id','Joining Date','Role','Status','Experience','Action']
    const [showDelete,setShowDelete]=useState(false);
    const [deleteId,setDeleteId]=useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [deleteEmployee,{data:deleteData,isSuccess:deleteSuccess}]=useDeleteEmployeeMutation();

    const {data} = useGetEmployeeListQuery();

    let employeeData = []
    data?.data.forEach((emp)=>{
        const temp = {
            name : emp.name,
            id :emp.id,
            joiningDate:emp.joining_date,
            Role:emp.role,
            status:emp.status,
            Experience:emp.experience,



        }
        employeeData.push(temp);
    })
    console.log(data?.data);
   
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
    const handleDeleteClick = (e, id)=> {
        setShowDelete(!showDelete);
        setDeleteId(id);
        e.stopPropagation();
    }
    const handleCancelClick = (e)=> {
        setShowDelete(false);
        setDeleteId(null);
        e.stopPropagation();
    }

    const handleConfirmClick = (e)=> {
        setShowDelete(false);
        deleteEmployee(deleteId);
        
        

        e.stopPropagation();
    }
    const handleEditClick = (e,id) =>{
        navigate(`/employees/edit/${id}`);
        e.stopPropagation();
    }
    
    
    // useEffect(()=>{
    //     if(deleteSuccess)
    //     {
    //         navigate('/employees');
    //     }
    // },[deleteSuccess]);
    return(
        <section className="employee-section">
            <Navbar/>
        {showDelete&&<Popup onConfirmClickFunc ={handleConfirmClick} onCancelClickFunc ={handleCancelClick} />}
            
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
                                <td><EditDelete onDeleteclickfunc={(e) => handleDeleteClick(e, emp.id)} onEditclickfunc={(e) => handleEditClick(e, emp.id)}/></td>
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