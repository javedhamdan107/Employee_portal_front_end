
import { addEmployee, deleteEmployee, editEmployee } from "../actions/employeeActions";
import { createReducer } from "@reduxjs/toolkit";

type EmployeeType = {
    name:string;
    id:number;
    joiningDate:string;
    Role:string;
    status:string;
    Experience:number;

}


const initialState :Array<EmployeeType> = [{
    name :'John',
    id :1,
    joiningDate:'2010-01-02',
    Role:'Full Stack',
    status:'active',
    Experience:5,
   
},
{
    name :'John2',
    id :2,
    joiningDate:'2010-01-02',
    Role:'Full Stack',
    status:'inactive',
    Experience:5,
  
},
{
    name :'John3',
    id :3,
    joiningDate:'2010-01-02',
    Role:'Full Stack',
    status:'active',
    Experience:5,
   
}]
const employeeReducer =  createReducer(initialState,(builder) =>{
    builder.addCase(addEmployee,(state,action) => {
        state = [...state,action.payload.employee];
        return state;

    })
    builder.addCase(editEmployee,(state,action) => {
        const tempState=state.filter((employee) => employee.id !== action.payload.employee.id);
        const newState = [...tempState,action.payload.employee]
        return newState;

    })
    builder.addCase(deleteEmployee,(state,action) => {
        const newState = state.filter((employee) => employee.id !== action.payload.idToRemove);
        return newState;

    })
});


export default employeeReducer;