import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link,useNavigate } from "react-router-dom";
import './UserList.css';
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
//importing ListGroup from reactstrap
export const UserList = () => {
    let navigate=useNavigate();
  const { users, removeUser } = useContext(GlobalContext);
//displying the lisn of users
  return (
    <ListGroup className="mt-4 userlist">
      {users.length > 0 ? (
        <>
          {users.map(user => (
            <ListGroupItem className="d-flex userlist1" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                  {/* navigating to the edituser page on clicking the edit button */}
              <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </ListGroup>
  )
}