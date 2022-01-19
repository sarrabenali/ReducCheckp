import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionsTypes/ListTask"

const initialstate = {
    toggle : false,
    taskList : [
        { id: Math.random(), text: "Learn React", isDone: false},
        {id:Math.random(), text: "Learn Redux", isDone: false},
    ]
}

const listReducer = ( state = initialstate, {type, payload}) => {
   switch (type){
       case ADD_TASK : return  {...state, taskList: [...state.taskList, payload]}
       case DELETE_TASK: return {...state,taskList: state.taskList.filter ((el) => el.id !== payload)}
       case DONE_TASK: return {...state, taskList: state.taskList.map ((el) => el.id === payload ? {...el, isDone: !el.isDone} : el)}
       case EDIT_TASK: return {...state, taskList : state.taskList.map ((el) => (el.id === payload.id ? {...el, text: payload.newTask} : el))}
       default : return state;
   }

}
 export default listReducer