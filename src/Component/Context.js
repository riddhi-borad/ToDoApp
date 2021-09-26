import React,{createContext,useReducer} from 'react'

export const Consumer=createContext();
const initialtask=[];
const reducer=(task,action)=>{
    switch(action.type){
        case 'VIEW_TASK':
            return task=action.payload
        default:
            return task;
    }
}
export function Provider(props) {
    const [task,setlist]=useReducer(reducer,initialtask)
    return (
        <Consumer.Provider value={[task,setlist]}>
            {props.children}
        </Consumer.Provider>
    )
}


