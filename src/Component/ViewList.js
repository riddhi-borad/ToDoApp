import React, { Component } from 'react'
import axios from 'axios'
export default class ViewList extends Component {
    constructor(props){
        super(props)
        this.state={List:[]}
        this.view()
    }
    view=async()=>{
        const res=await axios.get('http://localhost:8080/view')
        this.setState({List:res.data})
    }
    ondelete=(id)=>{
        axios.get(`http://localhost:8080/delete/`+id)
        .then((res)=>{
            if(res.status=="200"){
                this.view()
            }
           
        })
        .catch(err=>{console.log(err)})
    }
    render() {
        const {List}=this.state
        return (
            <div>
               <div className="container ">
           <h1 className="text-center text-primary text-info my-3">Task list</h1>
           <div className="row justify-content-center">
               <div className="col-md-6">
               <div className="table-responsive">
           <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {List.map((data)=>(
                   <tr key={data._id}>
                   <td>{data.name}</td>
                   <td><button className="btn btn-danger m-2" onClick={()=>{this.ondelete(data._id)}}>Delete</button></td>
                   </tr>
                ))}
            </tbody>
            </table>
            </div>
           </div>
           </div>
        </div>       
            </div>
        )
    }
}
