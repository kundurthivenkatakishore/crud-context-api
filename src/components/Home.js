import React from 'react';
import { Heading } from "./Heading";
import { UserList } from "./UserList";
import './Home.css'

export const Home = () => {
  return (
    <div className='home'>
      <Heading />
      <UserList />
    </div>
  )
}