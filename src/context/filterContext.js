import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { data } from "../components/Database/data";
import { composeFunction, functionList, getFilteredByType } from "./filterUtils";
import { filterReducer } from "./Reducer/filterReducer";


const FilterContext=createContext();
const initialData={
    location:"",
    movedInDate:"",
    price:"",
    property:""
}
const initialState={
    sortBy:"",
    favorites:[],
    searchByQuery:"",
    searchByForm:initialData
}
const FilterProvider=({children})=>{
    const [state,dispatch]=useReducer(filterReducer,initialState);
    const[formData,setFormData]=useState(initialData);
    const filteredData=composeFunction(state,functionList)(data);
    useEffect(()=>{
    
    },[data])
    return <FilterContext.Provider value={{state,dispatch,filteredData,formData,setFormData,initialData}}>{children}</FilterContext.Provider>
}

const useFilters=()=>useContext(FilterContext);
export {useFilters,FilterProvider};