import React,{useState,useContext,useEffect} from 'react'
import Service from './Service'
import {Consumer} from './Context'
export default function Edit(res) {
    
    const [task,setlist]=useContext(Consumer)
    const [formdata,setformdata]=useState({name:"",title:"",duration:"",desc:""})

    useEffect(()=>{
        async function fetchData()
        {
            const newtask=await new Service().editData(res.match.params.id);
            setformdata({...formdata,id:newtask._id,name:newtask.name,title:newtask.title,duration:newtask.duration,desc:newtask.desc})
            const Task=await new Service().getData();
            setlist({type:"VIEW_TASK", payload: Task})
        }
        fetchData();
    },[])

    const oninput=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const updatelist=async()=>{
        await new Service().updatData(formdata);
        const newTask=await new Service().getData();
        setlist({type:"VIEW_TASK", payload: newTask})
    }
    return (
        <div className="container">
            <h1 className="text-center my-5 text-info" >Edit Task List</h1>
            <div className="form-group">
                <label>Name:</label>
                <input className="form-control" type="text" name="name" onChange={oninput} value={formdata.name}></input>
            </div>
            <div className="form-group">
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
            </div>
            <div className="text-center">
            <button className="btn btn-info"  onClick={updatelist}>Update Task</button>
            </div>
        </div>
    )
}
