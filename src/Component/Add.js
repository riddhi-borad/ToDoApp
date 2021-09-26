
import React,{useState,useContext} from 'react'
import Service from './Service'
import {Consumer} from './Context'
export default function Add() {
    const [task,setlist]=useContext(Consumer)
    const [formdata,setformdata]=useState({name:"",title:"",duration:"",desc:""})
    
    const oninput=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const addlist=async()=>{
        if(formdata.name==""){
            console.log("name is required!")
        }
        // if(formdata.title==""){
        // console.log("title is required!")
        // }
        // if(formdata.duration==""){
        //     console.log("duration is required!")
        //     }
        // if(formdata.desc==""){
        //     console.log("Desc is required!")
        // }
        else{
            await new Service().addData(formdata);
            const newTask=await new Service().getData();
            setlist({type:"VIEW_TASK", payload: newTask})
            setformdata({...formdata,name:"",title:"",duration:"",desc:""})
                }
    }
    return (
        <div className="container">
            <h1 className="text-center my-5 text-info" >Add Task List</h1>
            <div className="form-group">
               
                <input className="form-control" type="text" name="name" onChange={oninput} placeholder="Task Name" value={formdata.name}></input>
            </div>
            {/* <div className="form-group">
                <label>Task Title:</label>
                <input className="form-control" type="text" name="title" onChange={oninput} value={formdata.title}></input>
            </div>
            <div className="form-group">
                <label>Duration:</label>
                <input className="form-control" type="text" name="duration" onChange={oninput} value={formdata.duration}></input>
            </div>
            <div className="form-group">
                <label>Task Description:</label>
                <input className="form-control" type="text" name="desc" onChange={oninput} value={formdata.desc}></input>
            </div>*/}
            <div className="text-center">
            <button className="btn btn-info" onClick={addlist}>Add Task</button>
            </div> 
        </div>
    )
}

// const addlist=()=>{
//     const id=task.length+1;
//     setlist(task=>[...task, {id:id, ...formdata}])
//     setformdata({...formdata,name:"",title:"",duration:"",desc:""})
// }