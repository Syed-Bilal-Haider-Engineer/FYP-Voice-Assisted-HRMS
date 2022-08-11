
import { Action } from 'history';
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

export const FetchEmployeeleave=(values)=>{
  return{
    type: ActionTypes.Employeeleave,
    payload:values
  }
}


export const Clientinfo=(values)=>{
  return {
    type:ActionTypes.Client,
    payload:values
  }
}

export const project=(values)=>{
  return {
    type:ActionTypes.project,
    payload:values
  }

}

export const jobsearch=(values)=>{
  console.log("values",values);
  return {
    type:ActionTypes.jobsearch,
    payload:values
  }
}

export const Tasksdata=(values)=>{
  return {
    type:ActionTypes.Tasks,
    payload:values
  }
}

export const Notice=(values)=>{
  return {
    type:ActionTypes.notice,
    payload:values
  }
}

export const Attendance=(values)=>{
  return {
    type:ActionTypes.attendance,
    payload:values
  }
}

export const employeesearch=(values)=>{
  return {
    type:Action.empsearch,
    payload:values
  }
}

export const contactususer=(values)=>{
  return {
    type:Action.contactus,
    payload:values
  }
}