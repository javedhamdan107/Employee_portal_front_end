import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './CreateEmployee.css'
import FormInput from '../../components/forminput/FormInput';
import { useState } from 'react';
import DropDown from '../../components/dropdown/DropDown';
import Button from '../../components/button/Button';

const CreateEmployee = () =>{
    const dept=['department1','department2'];
    const roles=['role1','role2'];
    const stat=['active','inactive','roles'];
    const [employeeName, setEmployeename] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [experience,setExperience] = useState();
    const [department,setDepartment] = useState(); 
    const [role,setRole] = useState();
    const [status,setStatus] =  useState();
    const[flatNo,setFlatNo] = useState();
    const[addressLine1,setAddressLine1] = useState();
    const[addressLine2,setAddressLine2] = useState();
    const handleEmployeeNameChange = (e) => {
        setEmployeename(e.target.value);
        console.log(employeeName);
    }
    const handleJoiningDateChange = (e) => {
        setJoiningDate(e.target.value);
        console.log(employeeName);
    }
    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
        console.log(employeeName);
    }
    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
        console.log(employeeName);
    }
    const handleRoleChange = (e) => {
        setRole(e.target.value);
        console.log(employeeName);
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        console.log(employeeName);
    }
    const handleFlatNoChange= (e) => {
        setFlatNo(e.target.value);
        console.log(employeeName);
    }
    const handleAddressLine1Change= (e) => {
        setAddressLine1(e.target.value);
        console.log(employeeName);
    }
    const handleAddressLine2Change= (e) => {
        setAddressLine2(e.target.value);
        console.log(employeeName);
    }

    return(
        <div>
             <section className="employee-section">
            <Navbar/>
            
            <div className="employee-right">
                <Header/>
                <div className="subheader">
                    <div className='heading-container'>
                        <span className="heading">Create Employee</span>
                    </div>
                </div>
                <div className='form-container'>
                    <div className='input-form-container'>
                    <FormInput label='Employee Name' value={employeeName} type='text' onChange={handleEmployeeNameChange} />
                    <FormInput label='Joining Date' value={joiningDate} type='text' onChange={handleJoiningDateChange} />
                    <FormInput label='Joining Date' value={experience} type='text' onChange={handleExperienceChange} />
                    <DropDown label='Department' value={department} options={dept} onChange={handleDepartmentChange} />
                    <DropDown label='Role' value={role} options={roles} onChange={handleRoleChange} />
                    <DropDown label='Status' value={status} options={stat} onChange={handleStatusChange} />
                    </div>
                    <div className='address-container'>
                        <FormInput label='Address' value={flatNo} type='text' onChange={handleFlatNoChange} />
                        <FormInput label='Address Line 1' value={addressLine1} type='text' onChange={handleAddressLine1Change} />
                        <FormInput label='Address Line 2' value={addressLine2} type='text' onChange={handleAddressLine2Change} />
                        <div className='buttons-container'>
                        <Button text='Create' type='submit' onClick={()=>{}} />
                        <Button text='Cancel' type='reset' onClick={()=>{}} />
                        </div>

                    </div>
                </div>
          
            </div>

           
            </section>
        </div>
    )
}
export default CreateEmployee;