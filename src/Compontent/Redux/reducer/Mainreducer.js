import {ActionTypes} from '../Actionstypes/Actionstypes';
import { combineReducers } from 'redux';
const usersave=[];


//.........users redux...............
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
//...............category redux.....................
const catgeory=[];
const categoryreducer=(state=catgeory,actions)=>{
    // console.log("Actions payload",actions.payload);
    switch(actions.type){
        case ActionTypes.Getcategory:
            const Categorystate=actions.payload;
            state=[...Categorystate];
        return state;
        default:
      return state;
    }
}
const reducer=combineReducers(
    {
        Userregisteration,
        categoryreducer
    });
export default reducer