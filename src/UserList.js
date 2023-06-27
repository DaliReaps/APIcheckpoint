import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import UserCard from './UserCard';
import  "./UserCard.css"
const UserList = () => {
    const [listOfUser,setList]=useState();
    // Use axios to Get data from "https://jsonplaceholder.typicode.com/users" inside useEffect hooks
    useEffect(()=>{
        // API consumption
                axios.get("https://jsonplaceholder.typicode.com/users")
                // Use UseState hooks to save data into listOfUSer state 
                .then(res=>setList(res))
                .catch(err=>console.log(err))

    },[])

  return (
    <div>

{
listOfUser ? <div className="main"> 
            <ul className="cards">
            {/* Map listOfUser to display list of user into screen  */}
                 {listOfUser.data.map(el=><UserCard user={el} />) }
            </ul>
            </div> : <div class="lds-ring"><div></div><div></div><div></div><div></div></div> 

}

    </div>
  )
}

export default UserList