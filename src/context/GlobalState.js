import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

//intial state

const intialstate={
  users:[]
}
//create context
export const GlobalContext=createContext(intialstate);

//provider component
export const GlobalProvider=({children})=>{
  const[state,dispatch]=useReducer(AppReducer,intialstate);

  //actions
  const removeUser=(id)=>{
    dispatch({
      type:'REMOVE_USER',
      payload:id
    })
  }

  const addUser=(user)=>{
    dispatch({
      type:'ADD_USER',
      payload:user
    })
  }

  const editUser=(user)=>{
    dispatch({
      type:"EDIT_USER",
      payload:user
    })
  }

  return(
    <GlobalContext.Provider value={{
      users:state.users,
      removeUser,
      addUser,
      editUser
    }}>{children}</GlobalContext.Provider>
  )
}