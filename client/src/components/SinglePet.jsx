import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SinglePet = (props) => {
    const [pet,setPet] = useState({});
    const history = useHistory();
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            // console.log(res);
            setPet(res.data.result[0])
        })
        .catch(err=>{
            console.log("error",err);
        })
    },[id])

    const deleteHandler=(e,id)=>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            history.push('/')
        })
        .catch(err=>{
            console.log("error",err);
        })
    }

    return (
        <div>
            <div className="main">
                <h1>Pet Shelter</h1>
                <Link to="/">Home</Link>
            </div>
            <div className="main d-flex justify-content-between mb-3">
                <h3>Details About: {pet.name}</h3>
                <button onClick={(e)=>deleteHandler(e,pet._id)} className="btn btn-success" >Adopt {pet.name}</button>
            </div>
            <div className="border border-dark p-3">
                <p><span>Pet Name:</span> {pet.name}</p>
                <p><span>Pet Type:</span> {pet.type}</p>
                <p><span>Pet Description:</span> {pet.description}</p>
                <span>Skills:</span>
                    <ul>
                    {
                        pet.skill1?
                        <li>{pet.skill1}</li>
                        :null
                    }
                    {
                        pet.skill2?
                        <li>{pet.skill2}</li>
                        :null
                    }
                    {
                        pet.skill3?
                        <li>{pet.skill3}</li>
                        :null
                    }
                    </ul>
            </div>
        </div>
    );
}

export default SinglePet;