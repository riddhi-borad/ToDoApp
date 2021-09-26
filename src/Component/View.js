import React,{useContext} from 'react'
import {Consumer} from './Context';
import List from './List';
import Service from './Service';
export default function View() {
    const [task,setlist]=useContext(Consumer)
    if(task.length==0){
        new Service().getData().then(res=>{
            setlist({type:'VIEW_TASK',payload:res})
        })
    }
    return (
        <div className="container ">
           <h1 className="text-center text-primary text-info my-3">Task list</h1>
           <div className="row">
           <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    {/* <th>Title</th>
                    <th>Duration</th>
                    <th>Description</th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {task.map((data)=>(
                   <tr key={data._id}>
                   <List data={data} ></List>
                   </tr>
                ))}
            </tbody>
            </table>
           </div>
        </div>
    )
}
