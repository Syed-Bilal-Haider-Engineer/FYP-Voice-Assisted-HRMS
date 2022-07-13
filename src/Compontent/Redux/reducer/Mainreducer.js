import {ActionTypes} from '../Actionstypes/Actionstypes';
import { combineReducers } from 'redux';
const usersave=[];
const Userregisteration=(state=usersave,actions)=>{
    // console.log("Actions payload",actions.payload);
    switch(actions.type){
        case ActionTypes.Showusers:
            const newstate=actions.payload;
            state=[...newstate];
        return state;
        default:
      return state;
    }
}
const reducer=combineReducers(
    {
        Userregisteration
    });
export default reducer