import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditPet = (props) => {
    const [pet,setPet] = useState({});
    const history = useHistory();
    const {id} = useParams();
    const [errors, setErrors] = useState({})



    const changeHandler = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${id}`, pet)
            .then(res => {
                if (res.data.error) {
                    console.log(res);
                    setErrors(res.data.error.errors)
                } else {
                    history.push("/")
                }
            })
            .catch(err => {
                console.log("error", err);
            })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            console.log(res);
            setPet(res.data.result[0])
        })
        .catch(err=>{
            console.log("error",err);
        })
    },[id])

    return (
        <div>
            <div className="main">
                <h1>Pet Shelter</h1>
                <Link to="/">Home</Link>
            </div>
            <div className="main">
                <h3>Know a pet needing a home?</h3>
            </div>
            <form onSubmit={(e) => submitHandler(e)} className="main mt-3 border border-dark p-3 d-flex flex-column" action="">
                <div className="Form d-flex justify-content-around">
                    <div className="leftForm d-flex flex-column">
                        <h5>Pet Info</h5>
                        <label htmlFor="">Pet Name: </label>
                        <input onChange={(e) => changeHandler(e)} value={pet.name} name="name" className="" type="text" />
                        <p className="text-danger">{errors.name? errors.name.message : ""}</p>
                        <label htmlFor="">Pet type: </label>
                        <input onChange={(e) => changeHandler(e)} value={pet.type} name="type" className="" type="text" />
                        <p className="text-danger">{errors.type? errors.type.message : ""}</p>
                        <label htmlFor="">Pet Description: </label>
                        <input onChange={(e) => changeHandler(e)} value={pet.description} name="description" className="" type="text" />
                        <p className="text-danger">{errors.description? errors.description.message : ""}</p>
                    </div>
                    <div className="rightForm d-flex flex-column">
                        <h5>Skills (Optional)</h5>
                        <label htmlFor="">Skill One: </label>
                        <input onChange={(e) => changeHandler(e)} value={pet.skill1} name="skill1" className="mb-3" type="text" />
                        <label htmlFor="">Skill Two: </label>
                        <input onChange={(e) => changeHandler(e)} value={pet.skill2} name="skill2" className="mb-3" type="text" />
                        <label htmlFor="">Skill Three: </label>
                        <input onChange={(e) => changeHandler(e)} value={pet.skill3} name="skill3" className="mb-3" type="text" />
                    </div>
                </div>
                <input className=" subBtn btn btn-primary" type="submit" value="Update pet" />
            </form>
        </div>
    );
}

export default EditPet;