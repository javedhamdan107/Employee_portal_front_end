import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './CreateEmployee.css'
import FormInput from '../../components/forminput/FormInput';
import { useEffect, useState } from 'react';
import DropDown from '../../components/dropdown/DropDown';
import Button from '../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editEmployee,addEmployee } from '../../actions/employeeActions';
import { useGetEmployeeQuery, useLazyGetEmployeeQuery } from '../EmployeeDetails/api';
import { useCreateEmployeeMutation, useEditEmployeeMutation, useGetAllDepartmentsQuery, useGetRolesQuery } from './api';

const CreateEmployee = () =>{
    const { id }= useParams();
    const [dept,setDept]=useState([]);
    const [roles,setRoles]=useState([]);
    const stat=['Active','Inactive','Probation'];


 
    const [getEmp,{data,isSuccess}] = useLazyGetEmployeeQuery();
    const [createEmployee,{data:createData,isSuccess:createSuccess}]=useCreateEmployeeMutation();
    const [editEmployee,{data:editData,isSuccess:editSuccess}]=useEditEmployeeMutation();
    const {data:depart} = useGetAllDepartmentsQuery();
    const {data:roleList} = useGetRolesQuery();
    


    

    const [employeeName, setEmployeename] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [experience,setExperience] = useState('');
    const [department,setDepartment] = useState(''); 
    const [role,setRole] = useState('');
    const [status,setStatus] =  useState('');
    const[addressLine1,setAddressLine1] = useState('');
    const[addressLine2,setAddressLine2] = useState('');
    const[city,setCity] = useState('');
    const[state,setState] = useState('');
    const[country,setCountry] = useState('');
    const[pincode,setPincode] = useState('');

    useEffect(()=>{
        if(id)
        {
            getEmp(id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        setEmployeename(data?.data.name);
        setUserName(data?.data.username);
        setJoiningDate(data?.data.joining_date);
        setExperience(data?.data.experience);
        // setDepartment(`${data?.data.departmentId}`);
        setRole(data?.data.role);
        setStatus(data?.data.status);
        setAddressLine1(data?.data.address.address_line_1);
        setAddressLine2(data?.data.address.address_line_2);
        setState(data?.data.address.state)
        setCity(data?.data.address.city);
        setCountry(data?.data.address.country);
        setPincode(data?.data.address.pincode);

    
    },[data]);
    useEffect(()=>{
        if(depart?.data && dept.length === 0) {
            setDept(depart.data.map((dep) => dep.name));
        }
        if (depart?.data && data?.data) {
            setDepartment((depart.data.find((dep) => dep.id === data?.data?.departmentId) || {}).name);
        }
        //  depart?.data.forEach((depat)=>{
        //     setDept((curr_dept)=>[...curr_dept,depat.name]);
        //     if(depat.id===data?.data.departmentId)
        //     {
        //         setDepartment(depat.name)
        //         console.log(department);
        //     }
        //  }
         
         
    },[depart, data]);

    useEffect(()=>{
        // roleList?.data.data.forEach((rol)=>roles.push(rol));
        // setRoles(roleList?.data.data)
        roleList?.data.data.forEach((rol)=>setRoles((curr_rol)=>[...curr_rol,rol]));

    },[roleList]);
    useEffect(()=>{
        if(createData&&createSuccess)
        {
            navigate('/employees');
        }
    },[createSuccess]);

    useEffect(()=>{
        if(editData&&editSuccess)
        {
            navigate('/employees');
        }
    },[editSuccess]);
    
   
   
    const handleEmployeeNameChange = (e) => {
        setEmployeename(e.target.value);
        console.log(employeeName);
    }
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        console.log(employeeName);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
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
        console.log(role);
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        console.log(status);
    }
    const handlePincodeChange= (e) => {
        setPincode(e.target.value);
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
    const handleCityChange= (e) => {
        setCity(e.target.value);
        console.log(employeeName);
    }
    const handleStateChange= (e) => {
        setState(e.target.value);
        console.log(employeeName);
    }
    const handleCountryChange= (e) => {
        setCountry(e.target.value);
        console.log(employeeName);
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('button clicked');

    id?editEmployee({
            id:Number(id),
            body:{
                name: employeeName,
                username: userName,
                password: password,
                experience: Number(experience),
                departmentId: depart?.data.find((obj) => obj.name === department)?.id,
                joining_date: joiningDate,
                status:status,
                role: role,
                address: {
                address_line_1: addressLine1,
                address_line_2: addressLine2,
                city: city,
                state: state,
                country: country,
                pincode: pincode
                }
            }
       
        
      }):createEmployee({
        name: employeeName,
        username: userName,
        password: password,
        experience: Number(experience),
        departmentId: depart?.data.find((obj) => obj.name === department)?.id,
        joining_date: joiningDate,
        role: role,
        status:status,
        address: {
          address_line_1: addressLine1,
          address_line_2: addressLine2,
          city: city,
          state: state,
          country: country,
          pincode: pincode
        },
        
      });
       
    }

    return(
        <div>
             <section className="employee-section">
            <Navbar/>
            
            <div className="employee-right">
                <Header/>
                <div className="subheader">
                    <div className='heading-container'>
                        {id?<span className="heading">Edit Employee</span>:<span className="heading">Create Employee</span>}
                    </div>
                </div>
                <div className='form-container'>
                    <div className='input-form-container'>
                    <FormInput label='Employee Name' value={employeeName} type='text' onChange={handleEmployeeNameChange} />
                    <FormInput label='User Name' value={userName} type='text' onChange={handleUserNameChange} />
                    <FormInput label='Password' value={password} type='password' onChange={handlePasswordChange} />
                    <FormInput label='Joining Date' value={joiningDate} type='text' onChange={handleJoiningDateChange} />
                    <FormInput label='Experience' value={experience} type='text' onChange={handleExperienceChange} />
                    <DropDown label='Department' value={department} options={dept?dept:[]} onChange={handleDepartmentChange} />
                    <DropDown label='Role' value={role} options={roles?roles:[]} onChange={handleRoleChange} />
                    <DropDown label='Status' value={status} options={stat} onChange={handleStatusChange} />
                    
                    <FormInput label='Address Line 1' value={addressLine1} type='text' onChange={handleAddressLine1Change} />
                    <FormInput label='Address Line 2' value={addressLine2} type='text' onChange={handleAddressLine2Change} />
                    <FormInput label='City' value={city} type='text' onChange={handleCityChange} />
                    <FormInput label='State' value={state} type='text' onChange={handleStateChange} />
                    <FormInput label='Country' value={country} type='text' onChange={handleCountryChange} />
                    <FormInput label='Pincode' value={pincode} type='text' onChange={handlePincodeChange} />
                    </div>
                    <div className='address-container'>
                        
                        <div className='buttons-container'>
                        <Button text='Create' type='submit' onClick={handleSubmit} />
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