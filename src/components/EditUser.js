import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate,useParams } from "react-router-dom";
import './EditUser.css';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

//editing the user
export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  })
  const navigate = useNavigate();
  const params=useParams();
  const currentUserId = params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])
  //onchange methood to get the updated value of input
  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate("/")
    //navigating to the home page after editing 
  }

  return (
    <Form onSubmit={onSubmit} className="edit-form">
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button  className='btn btn-primary' type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}