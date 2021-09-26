import React,{useContext} from 'react'
import {Consumer} from './Context';
import Service from './Service';

import {Link} from 'react-router-dom';

export default function List(props) {
    const [task,setlist]=useContext(Consumer)

    const ondelete=async(id)=>{
        await new Service().deleteData(id);
        const newTask=await new Service().getData();
        setlist({type:"VIEW_TASK", payload: newTask})
    }

    return (
        <>
            <td>{props.data.name}</td>
            {/* <td>{props.data.title}</td>
            <td>{props.data.duration}</td>
            <td>{props.data.desc}</td> */}
            <td>
                <button className="btn btn-danger m-2" onClick={()=>{ondelete(props.data._id)}}>Delete</button>
                {/* <Link className="btn btn-info m-2" to={"/edit-list/"+props.data._id}>Edit</Link> */}
            </td>
        </>
    )
}
