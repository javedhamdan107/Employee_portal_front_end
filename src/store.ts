import { configureStore  } from "@reduxjs/toolkit";
import employeeReducer from "./reducers/employeeReducer";
import baseApi from "./services/index";
import employeeService from "./pages/Employees/api";

const store= configureStore({
    reducer:{
        employees:employeeReducer,
        [employeeService.reducerPath]: employeeService.reducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),employeeService.middleware, baseApi.middleware]
});

export default store;