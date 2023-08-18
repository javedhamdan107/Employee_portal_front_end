import { createAction } from "@reduxjs/toolkit";

type addEmployeeType = {
  name: string;
  id: number;
  joiningDate: string;
  Role: string;
  status: string;
  Experience: number;
};

const addEmployee = createAction<{ employee: addEmployeeType }>(
  "EMPLOYEE:CREATE",
);
const editEmployee = createAction<{ employee: addEmployeeType }>(
  "EMPLOYEE:EDIT",
);
const deleteEmployee = createAction<{ idToRemove: number }>("EMPLOYEE:DELETE");

export { addEmployee, editEmployee, deleteEmployee };
