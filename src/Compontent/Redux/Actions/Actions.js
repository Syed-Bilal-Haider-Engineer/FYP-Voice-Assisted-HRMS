
import {ActionTypes} from '../Actionstypes/Actionstypes';
// ...............User fetch .....................
export const Showusers =(values)=> {
  return {
    type:ActionTypes.Showusers,
    payload: values
}};
export const Getcategory=(values)=>{
  console.log("catgeory",values);
  return {
    type:ActionTypes.Getcategory,
    payload:values
  }
}

export const fetchvister=(values)=>{
  return {
    type:ActionTypes.fetchvister,
    payload:values
  }
}
export const fetchJob=(values)=>{
  return {
    type:ActionTypes.Job,
    payload:values
  }
}

export const Fetchdepartment=(values)=>{
  return {
    type:ActionTypes.department,
    payload:values
  }
}

export const Fetchdesignation=(values)=>{
  return {
    type:ActionTypes.designation,
    payload:values
  }
}

export const fetchHolidays=(values)=>{
  return{
    type:ActionTypes.fetchHoliday,
    payload:values
  }
}

export const Userapplications=(values)=>{
  return {
    type:ActionTypes.Userapplications,
    payload:values
  }
}

export const FetchEmployee=(values)=>{
  return {
    type:ActionTypes.Employee,
    payload:values
  }
}