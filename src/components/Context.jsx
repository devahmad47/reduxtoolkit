import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export const noteContext=createContext();
const Context = (props) => {
  
const s1={
  myname: "Ahmad",
  class: "Bsse"
}
const [name, setname]=useState(s1);
 const update = ()=>{
setTimeout(() => {
 setname({ 
myname: "Ahmad Sarwar",
 class: "Bsse 5th"
})
}, 3000);
}
return (
     <noteContext.Provider value={{name,update}}>
        {props.children}
     </noteContext.Provider>
   )
 }

export default Context
