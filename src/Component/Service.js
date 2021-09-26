import axios from 'axios';
export default class Service {
    addData=(payload)=>{
        return axios.post('http://3.129.92.172:5000/save',payload)
        .then(()=>{})
        .catch((err)=>{
            console.log(err)
        })
    }

    getData=()=>{
        return axios.get('http://3.129.92.172:5000/view')
        .then(response => {
            if(response.status==200){
                return response.data;
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  

    deleteData=(payload)=>{
       return axios.get(`http://3.129.92.172:8080/5000/${payload}`)
       .then(()=>{})
       .catch((err)=>{
            console.log(err)
       })
   }

    editData=(payload)=>{
        return axios.get(`http://localhost:8080/edit/${payload}`)
        .then(response=>{
            if(response.status==200){
                return response.data;
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    updatData=(payload)=>{
        console.log(payload)
        return axios.post(`http://localhost:8080/update`,payload)
        .then(()=>{})
        .catch((err)=>{
            console.log(err)
        })
    }
}
