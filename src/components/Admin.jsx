import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Admin() {
    const[newdata, setNewdata] = useState([])

    function loadData(){
        axios.get("https://6659ba63de346625136daefa.mockapi.io/MJAAdmin")
        .then((res)=>{
            setNewdata(res.data)
        })
    }

    useEffect(() =>{
        loadData()
    }, [])
    
    function handleDelete(id)
    {
        axios.delete("https://6659ba63de346625136daefa.mockapi.io/MJAAdmin/" + id)
        .then((res) => {
            loadData();
        })
    }
    
    return (
    <div className='container'>
        <div className='admin'>
            <div class="col-lg-12">
                <table class="table table-bordered">
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>

                    <tbody>
                    {
                        newdata.map((eachData, i) => {
                            return(
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{eachData.firstname}</td>
                                    <td>{eachData.surname}</td>
                                    <td>{eachData.email}</td>
                                    <td>{eachData.number}</td>
                                    <td>{eachData.passwd2}</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm" onClick={ () => handleDelete(eachData.id)}><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Admin