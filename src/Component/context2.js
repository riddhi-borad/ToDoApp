import React,{createContext,useReducer} from 'react'

export const Consumer2=createContext();
const initialtask=[];
const reducer=(task,action)=>{
    switch(action.type){
        case 'VIEW_TASK':
            return task=action.payload   
        default:
            return task;
    }
}
export function Provider2(props) {
    const [task,setlist]=useReducer(reducer,initialtask)
    return (
        <Consumer2.Provider2 value={[task,setlist]}>
            {props.children}
        </Consumer2.Provider2>
    )
}


