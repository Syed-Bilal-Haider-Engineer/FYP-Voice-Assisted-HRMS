
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


