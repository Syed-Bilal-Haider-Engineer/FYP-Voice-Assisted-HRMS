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

// .............Vister reducer.apply..........

const vister=[];
const Visterreducer=(state=vister,actions)=>{
    // console.log("Actions payload",actions.payload);
    switch(actions.type){
        case ActionTypes.fetchvister:
            const visterinfo=actions.payload;
            state=[...visterinfo];
        return state;
        default:
      return state;
    }
}

// .................Job reducer...........
const Job=[];
const searchJob = "";
const Jobreducer=(state=Job,actions)=>{
    // console.log("Actions payload",actions.payload);
    switch(actions.type){
        case ActionTypes.Job:
            const Jobinfo=actions.payload;
            state=[...Jobinfo];
        return state;
        default:
      return state;
    }
}

// ..............Department...............
const depart=[];
const Departmentreducer=(state=depart,actions)=>{
    switch(actions.type){
        case ActionTypes.department:
            const departmentdata=actions.payload;
            state=[...departmentdata];
        return state;
        default:
      return state;
    }
}

// ...........Designation.......
const designation=[];
const Designationreducer=(state=designation,actions)=>{
    switch(actions.type){
        case ActionTypes.designation:
            const disnationdata=actions.payload;
            state=[...disnationdata];
        return state;
        default:
      return state;
    }
}


const Fetchholidaystate=[];
const Fetchholidayreducer=(state=Fetchholidaystate,actions)=>{
    switch(actions.type){
        case ActionTypes.fetchHoliday:
            const holidayValue=actions.payload;
            state=[...holidayValue];
        return state;
        default:
      return state;
    }
}

const fetchVister=[];
const fetchuserAppliations=(state=fetchVister,actions)=>{
    switch(actions.type){
        case ActionTypes.Userapplications:
            const applicationsvalues=actions.payload;
            state=[...applicationsvalues];
        return state;
        default:
      return state;
    }
}

// ...............Employee reducer...............
const Fetchemployee=[];
const Fetchemployeereducer=(state=Fetchemployee,actions)=>{
    switch(actions.type){
        case ActionTypes.Employee:
            const Employeevalue=actions.payload;
            state=[...Employeevalue];
        return state;
        default:
      return state;
    }
}
const reducer=combineReducers(
    {
        Userregisteration,
        categoryreducer,
        Visterreducer,
        Jobreducer,
        Departmentreducer,
        Designationreducer,
        Fetchholidayreducer,
        fetchuserAppliations,
        Fetchemployeereducer
    });
export default reducer