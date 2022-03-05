import React,{useContext,useState} from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import {Form,FormGroup,Label,Input,Button } from 'reactstrap';
import './AddUser.css'
//adding new user
export const AddUser=()=>{
    const[name,setName]=useState("");
    const {addUser}=useContext(GlobalContext);
    const navigate=useNavigate();   

    const onSubmit=(e)=>{
        e.preventDefault();
        const newUser={
            id:uuid(),
            name
        }
        addUser(newUser);
        navigate("/");
        //directing to home page after adding the new user
    }
    const onChange=(e)=>{
        setName(e.target.value);
    }
    return(
        //form for taking input
        <Form onSubmit={onSubmit} className="form">
            <FormGroup>
                <Label>Name:</Label>
                <input type="text" value={name} onChange={onChange} name="name" 
                placeholder="Enter name" required/>
            </FormGroup>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/">Cancel</Link>
        </Form>
    )
}